workflow "Main" {
  on = "push"
  resolves = ["UnitTest"]
}

action "UnitTest" {
  needs = "Package Install"
  uses = "actions/npm@master"
  args = ["run", "test:ci"]
  secrets = ["COVERALLS_SERVICE_NAME", "COVERALLS_REPO_TOKEN"]
}

action "Package Install" {
  uses = "actions/npm@master"
  args = ["install"]
}
