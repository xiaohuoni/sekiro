module.exports = (api, options = {}) => {
  console.log(api.config);

  api.registerPlugin({
    id: 'sekiro:antd',
    apply: require('umi-plugin-react/lib/plugins/antd').default,
    opts: options.antd,
  });
  api.registerPlugin({
    id: 'sekiro:dva',
    apply: require('umi-plugin-react/lib/plugins/dva').default,
    opts: options.dva,
  });

  api._registerConfig(() => {
    return () => {
      return {
        name: 'antd',
        validate: () => true,
        onChange(newConfig) {
          api.service.restart(`antd changed`);
        },
      };
    };
  });

  api.onBuildSuccess(() => {
    console.log('[Sekiro]: success');
  });
};
