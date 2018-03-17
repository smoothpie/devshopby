
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'
    import universal, { setHasBabelPlugin } from 'react-universal-component'

    setHasBabelPlugin()

    const universalOptions = {
      loading: () => null,
      error: () => null,
    }

    const t_0 = universal(import('../src/containers/Product'), universalOptions)
const t_1 = universal(import('../src/containers/Home'), universalOptions)
const t_2 = universal(import('../src/containers/Contacts'), universalOptions)
const t_3 = universal(import('../src/containers/Thanks'), universalOptions)
const t_4 = universal(import('../src/containers/404'), universalOptions)
const t_5 = universal(import('../src/containers/Order'), universalOptions)

    // Template Map
    const templateMap = {
      t_0,
t_1,
t_2,
t_3,
t_4,
t_5
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_4"},"product":{c:{1:{t:"t_0",c:{"order":{t:"t_5"}}},2:{t:"t_0",c:{"order":{t:"t_5"}}},3:{t:"t_0",c:{"order":{t:"t_5"}}},4:{t:"t_0",c:{"order":{t:"t_5"}}},5:{t:"t_0",c:{"order":{t:"t_5"}}},6:{t:"t_0",c:{"order":{t:"t_5"}}},7:{t:"t_0",c:{"order":{t:"t_5"}}},8:{t:"t_0",c:{"order":{t:"t_5"}}},9:{t:"t_0",c:{"order":{t:"t_5"}}},"10":{t:"t_0",c:{"order":{t:"t_5"}}},"11":{t:"t_0",c:{"order":{t:"t_5"}}},"12":{t:"t_0",c:{"order":{t:"t_5"}}},"13":{t:"t_0",c:{"order":{t:"t_5"}}},"14":{t:"t_0",c:{"order":{t:"t_5"}}},"15":{t:"t_0",c:{"order":{t:"t_5"}}},"16":{t:"t_0",c:{"order":{t:"t_5"}}},"17":{t:"t_0",c:{"order":{t:"t_5"}}},"18":{t:"t_0",c:{"order":{t:"t_5"}}},"19":{t:"t_0",c:{"order":{t:"t_5"}}}}},"/":{t:"t_1"},"contacts":{t:"t_2"},"thanks":{t:"t_3"}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    if (typeof document !== 'undefined') {
      window.reactStaticGetComponentForPath = getComponentForPath
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
    