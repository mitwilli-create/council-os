import { readFileSync } from 'fs';

const files = readFileSync('chunks.txt', 'utf8').split('\n').filter(Boolean);
let errors = 0;
for (const file of files) {
  const content = readFileSync(file, 'utf8');
  if (!content.startsWith('---\n')) {
    console.log(`${file}: missing YAML frontmatter`);
    errors++;
    continue;
  }
  const lines = content.split('\n');
  const requiredFields = [
    'provider:', 'model:', 'capability:', 'chunk_id:',
    'last_updated:', 'verified_by_dealbreaker:', 'source_authority:',
    'confidence:', 'sycophancy_strikes_at_convergence:', 'egoism_strikes_at_convergence:'
  ];
  const frontmatter = lines.slice(1, lines.indexOf('---', 1)).join('\n');
  for (const field of requiredFields) {
    if (!frontmatter.includes(field)) {
      console.log(`${file}: missing field ${field}`);
      errors++;
    }
  }
}
if (errors === 0) console.log("All chunks are valid.");
