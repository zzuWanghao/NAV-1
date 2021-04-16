import acf from './images/acf.jpg'
import weiBo from './images/WeiBo.jpg'
import wyy from './images/wyy.png'
import youKu from './images/youKu.png'
import zhiHu from './images/zhiHu.png'
import touTiAo from './images/tou.png'
import bi from './images/bi.jpg'
import jd from './images/jd.jpg'
import G from './images/G.jpg'

const $siteList = $('.siteList')
const $lastLi = $('.lastLi')


let xObject;
const x = localStorage.getItem('x')

if (x) {
    xObject = JSON.parse(x);
}




const hashMap = xObject || [

    {
        logo: acf, logoType: 'image', url: 'https://www.acfun.cn/'

    },

    {
        logo: bi,
        logoType: 'image',
        url: 'https://www.bilibili.com/'
    },
    {
        logo: jd, logoType: 'image', url: 'https://www.jd.com/'

    },
    {
        logo: G,
        logoType: 'image',
        url: 'https://translate.google.cn/'
    },
    {
        logo: touTiAo,
        logoType: 'image',
        url: 'https://www.toutiao.com/'
    },
    {
        logo: weiBo,
        logoType: 'image',
        url: 'https://weibo.com/'
    },
    {
        logo: wyy,
        logoType: 'image',
        url: 'https://music.163.com/'
    },
    {
        logo: youKu,
        logoType: 'image',
        url: 'https://www.youku.com/'
    },
    {
        logo: zhiHu,
        logoType: 'image',
        url: 'https://www.zhihu.com/hot'
    }
];

const render = () => {

    $siteList.find('Li:not(.lastLi)').remove()
    hashMap.forEach((node, index) => {
        let $li;
        if (node.logoType === 'image') {
            $li = $(`<li>
            <div class="site">
                <div class="logo">
                <img src="${node.logo}"/ alt="">
                </div>
                <div class="link">${simplifyUrl(node.url)}</div>
                <div class="close">
                <svg class="icon">
                    <use xlink:href="#icon-shanchu"></use>
                </svg>
                </div>
            </div>
            </li>`).insertBefore($lastLi)
        }
        else {
            $li = $(`<li>
            <div class="site">
                <div class="logo">
                <div class="text">
                ${node.logo}
                </div>
                </div>
                <div class="link">${simplifyUrl(node.url)}</div>
                <div class="close">
                <svg class="icon">
                    <use xlink:href="#icon-shanchu"></use>
                </svg>
                </div>
            </div>
            </li>`).insertBefore($lastLi)
        }




        $li.on('click', () => {

            window.open(node.url, "_self")
        })

        $li.on('click', '.close', (e) => {

            e.stopPropagation();

            console.log('我点击到了')
            hashMap.splice(index, 1)
            render();

        })
    })


}

const simplifyUrl = (url) => {

    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
}

render()


$('.addButton').on('click', () => {
    let url = window.prompt('请输入添加网址')
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
    hashMap.push({
        logo: simplifyUrl(url)[0],
        logoType: 'text',
        url: url
    })

    render()

})

window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)

}

$(document).on('keypress', (e) => {

    // const key = e.key;  可简写为下行
    const { key } = e

    for (let i = 0; i < hashMap.length; i++) {

        if (simplifyUrl(hashMap[i].url)[0].toUpperCase() === key.toUpperCase()) {

            window.open(hashMap[i].url)
        }
    }


})


/* <li>
                <a href="https://www.acfun.cn">
                    <div class="site">
                        <div class="logo">A</div>

                        <div class="link">acFun.cn</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://www.bilibili.com/">
                    <div class="site">
                        <div class="logo">
                            <img src="images/bi.jpg" alt="bi">
                        </div>
                        <div class="link">BiLiBiLi.com</div>
                    </div>
                </a>
            </li> */