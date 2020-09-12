module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage"
    },
    assert: {
      // preset: "lighthouse:recommended" TODO: enable and fix findings
      "categories:performance": ["error", {"minScore": 0.8}],
      "categories:accessibility": ["error", {"minScore": 1}],
      "categories:seo": ["error", {"minScore": 1}]
    }
  }
}
