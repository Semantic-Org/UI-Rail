
Package.describe({
  name    : 'semantic:ui-rail',
  summary : 'Semantic UI - Rail: Single component release',
  version : '1.12.3',
  git     : 'git://github.com/Semantic-Org/UI-Rail.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'rail.css'
  ], 'client');
});
