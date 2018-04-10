"use strict";

module.exports = globalOptions;

function globalOptions(yargs) {
  // the global options applicable to _every_ command
  const opts = {
    loglevel: {
      defaultDescription: "info",
      describe: "What level of logs to report.",
      type: "string",
    },
    concurrency: {
      describe: "How many processes to use when lerna parallelizes tasks.",
      type: "number",
      requiresArg: true,
    },
    "reject-cycles": {
      describe: "Fail if a cycle is detected among dependencies.",
      type: "boolean",
      default: undefined,
    },
    progress: {
      defaultDescription: "true",
      describe: "Enable progress bars. Pass --no-progress to disable. (Always off in CI)",
      type: "boolean",
      default: undefined,
    },
    sort: {
      defaultDescription: "true",
      describe: "Sort packages topologically (all dependencies before dependents).",
      type: "boolean",
      default: undefined,
    },
    "max-buffer": {
      describe: "Set max-buffer(bytes) for Command execution",
      type: "number",
      requiresArg: true,
    },
  };

  // group options under "Global Options:" header
  const globalKeys = Object.keys(opts).concat(["help", "version"]);

  return yargs
    .options(opts)
    .group(globalKeys, "Global Options:")
    .option("ci", {
      // set in core/cli via .config()
      hidden: true,
      type: "boolean",
    });
}
