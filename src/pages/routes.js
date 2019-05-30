import _ from 'lodash';
import sign from '.sign';

/**
 * 解析 store 配置
 */
function _extractStore ({ children, store }) {
    if (!children || !children.length) {
        return { [store.key]: store.value };
    }
    return _.chain(children)
        .flatMap(({ store, children }) => {
            const stores = [];
            if (store && store.key && store.value) store.push(store);
            if (children && children.length) {
                stores.push(...children.filter(it => it.store && it.store.key && it.store.value).map(it => it.store));
            }
            return stores;
        })
        .keyBy('key')
        .mapValues('value')
        .value();
}

export const stores = {
    ..._extractStore({ children: sign })
}
