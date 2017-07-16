/**
 * @typedef {Object} ServiceSelector
 * @property {string} name - the full exact name of the IBM BPM service to be called
 * @property {string} [appAcronym] - the acronym of the process app or toolkit where the service is defined. If none of
 *                                   the snapshot selectors are defined, the tip is used.
 * @property {string} [snapshotId] - target a specific snapshot to run a specific version of a service. Only one of the
 *                                   snapshot selectors is required
 * @property {string} [snaphotAcronym] - target a snapshot via its acronym
 * @property {string} [snapshotName] - target a snapshot via its name
 */