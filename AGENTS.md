# Agent instructions

## Public repository
Everything pushed here, including branches, commit metadata, PRs,
comments, and CI output, must be suitable for public disclosure.

- Never include credentials, customer data, internal planning documents,
  private issue links, or agent session/transcript URLs.
- Write PR descriptions from the public diff and test results, not from
  internal task prompts or conversations.
- Before committing, check the effective Git author email. If it is not
  a GitHub noreply address, ask the contributor to confirm it is intended
  to be public. Do not change Git identity automatically.
- Before pushing, review all outgoing commits and their messages—not
  only the final diff—for unintended disclosures.
- If potentially confidential content is found, stop and ask privately;
  do not quote it in a public issue or comment.
- Never rewrite published history without explicit approval.

## Validation
- Run `npm run sync` after changing shared plugin content.
- Run `npm run validate` before submitting changes.
