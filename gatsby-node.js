/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateBabelConfig = ({ actions }, pluginOptions) => {
  actions.setBabelPlugin({
    name: `babel-plugin-transform-inline-environment-variables`,
  })
}
