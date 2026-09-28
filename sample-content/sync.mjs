// Sample content: `pull` dumps the configured space here, `push` seeds it into another space.
// Usage: node sample-content/sync.mjs pull | push
import { execSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

const DIR = 'sample-content'
const DATA_DIRS = ['components', 'stories', 'assets']
const cli = args => execSync(`pnpm exec storyblok --path ${DIR} --no-log-file-enabled --no-report-enabled ${args}`, { stdio: 'inherit' })

// Per-user or volatile story fields, stripped so the dump is safe to commit and diffs stay small
const STRIPPED_KEYS = ['last_author', 'last_author_id', 'preview_token', 'current_version_id', 'created_at', 'updated_at', 'published_at', 'first_published_at', 'favourite_for_user_ids']

function pull() {
  for (const dir of DATA_DIRS) {
    rmSync(join(DIR, dir), { recursive: true, force: true })
  }
  cli('components pull')
  cli('stories pull')
  cli('assets pull')

  for (const space of readdirSync(join(DIR, 'stories'))) {
    const dir = join(DIR, 'stories', space)
    for (const file of readdirSync(dir).filter(f => f.endsWith('.json'))) {
      const story = JSON.parse(readFileSync(join(dir, file), 'utf8'))
      for (const key of STRIPPED_KEYS) {
        delete story[key]
      }
      writeFileSync(join(dir, file), `${JSON.stringify(story, null, 2)}\n`)
    }
  }
}

function push() {
  const [from] = readdirSync(join(DIR, 'stories'))
  try {
    process.loadEnvFile()
  }
  catch {}
  if (from === process.env.STORYBLOK_SPACE_ID) {
    throw new Error(`STORYBLOK_SPACE_ID is the space the content was pulled from (${from}): pushing would duplicate its assets.`)
  }

  // Manifests map source ids to the target's: stale ones from another target would corrupt references
  for (const type of ['stories', 'assets']) {
    const manifest = join(DIR, type, from, 'manifest.jsonl')
    if (existsSync(manifest)) {
      rmSync(manifest)
    }
  }

  cli(`assets push --from ${from}`)
  cli(`stories push --from ${from} --publish`)
}

const commands = { pull, push }
const command = commands[process.argv[2]]
if (!command) {
  throw new Error('Usage: node sample-content/sync.mjs pull | push')
}
command()
