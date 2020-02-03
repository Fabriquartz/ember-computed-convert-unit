module.exports = {
  normalizeEntityName() {},
  afterInstall() {
    return this.addAddonToProject({
      packages: [{ name: 'ember-cli-cjs-transform' }]
    });
  }
};
