module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage"
    },
    assert: {
      // preset: "lighthouse:recommended" TODO: enable and fix findings
      assertions: {
        "categories:performance": ["error", { "minScore": 0.8 }],
        "categories:accessibility": ["error", { "minScore": 0.8 }],
        "categories:seo": ["error", { "minScore": 0.8 }]
      }
    }
  }
}
