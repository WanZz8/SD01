import { observable, action } from 'mobx';
import { POST, GET } from '../utils/request';
import {
    HOST,
    DOMAIN
} from '../config/baseConfig';

// 行情和持仓

class DealStore {
    // 公告的数组
    @observable total;

    // 资讯数组
    @observable information;

    constructor() {
        this.noticeAry = [];
        this.information = [];
    }

    @action
    getNotice() {
        GET(`${HOST}/index.htm`, { action: 'carousel' }).then((res) => {
            if (res.code === 200) {
                this.noticeAry = res.notices;
            }
        });
    }
}

const dealStore = new DealStore();

export default dealStore;
