workflow "Main" {
  on = "push"
  resolves = ["UnitTest"]
}

action "UnitTest" {
  needs = "Package Install"
  uses = "actions/npm@master"
  args = ["run", "test", "--", "--coverage"]
}

action "Package Install" {
  uses = "actions/npm@master"
  args = ["install"]
}
