var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-rail',
  summary : 'Semantic UI - Rail (official): Single component release of rail',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Rail.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
