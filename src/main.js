const $siteList = $('.siteList')
const $lastLi = $('.lastLi')

const x = localStorage.getItem('x')
const xObject = JSON.parse(x);



const hashMap = xObject || [
    {
        logo: 'A', logoType: 'Text', url: 'https://www.acfun.cn'

    },
    {
        logo: 'B',
        logoType: 'image',
        url: 'https://BiLiBiLi.com'
    },
];


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
                            <img src="images/bi.jpg" alt="">
                        </div>
                        <div class="link">BiLiBiLi.com</div>
                    </div>
                </a>
            </li> */

const render = () => {

    $siteList.find('Li:not(.lastLi)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
       
        <div class="site">
            <div class="logo">${node.logo}</div>
            <div class="link">${simplifyUrl(node.url)}</div>
            <div class="close">
            <svg class="icon">
                <use xlink:href="#icon-shanchu"></use>
            </svg>
            </div>
        </div>
        </li>`).insertBefore($lastLi)

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

        if (hashMap[i].logo.toUpperCase() === key.toUpperCase()) {

            window.open(hashMap[i].url)
        }
    }


})