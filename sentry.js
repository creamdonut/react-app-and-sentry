const SentryCli = require('@sentry/cli');

(async function () {
  const release = process.env.REACT_APP_SENTRY_RELEASE;
  if (!release) {
    console.warn('REACT_APP_SENTRY_RELEASE are not provided');

    return;
  }

  const cli = new SentryCli();

  try {
    console.log('Now creating sentry release ' + release);

    await cli.releases.new(release);

    console.log('Now uploading source maps');
    await cli.releases.uploadSourceMaps(release, {
      sourceMapPath: 'sourceMap',
      urlPrefix: '~/static/js',
      include: ['sourceMap'],
      rewrite: true,
    });

    console.log('Releasing release');

    await cli.releases.finalize(release);
  } catch (e) {
    console.error('Source maps uploading failed:', e);
  }
})();
