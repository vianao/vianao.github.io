var now1 = new Date();

function createtime1() {
    var grt = new Date("12/12/2022 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到vianao!`,
        `Go Feor It 🍭🍭🍭`,
        `
                                                                                                            
                           iiii                                                                              
                          i::::i                                                                             
                           iiii                                                                              
                                                                                           
vvvvvvv           vvvvvvviiiiiii   aaaaaaaaaaaaa   nnnn  nnnnnnnn      aaaaaaaaaaaaa      ooooooooooo        
v:::::v         v:::::v i:::::i   a::::::::::::a  n:::nn::::::::nn    a::::::::::::a   oo:::::::::::oo      
v:::::v       v:::::v   i::::i   aaaaaaaaa:::::a n::::::::::::::nn   aaaaaaaaa:::::a o:::::::::::::::o     
v:::::v     v:::::v    i::::i            a::::a nn:::::::::::::::n           a::::a o:::::ooooo:::::o     
v:::::v   v:::::v     i::::i     aaaaaaa:::::a   n:::::nnnn:::::n    aaaaaaa:::::a o::::o     o::::o     
v:::::v v:::::v      i::::i   aa::::::::::::a   n::::n    n::::n  aa::::::::::::a o::::o     o::::o     
v:::::v:::::v       i::::i  a::::aaaa::::::a   n::::n    n::::n a::::aaaa::::::a o::::o     o::::o     
v:::::::::v        i::::i a::::a    a:::::a   n::::n    n::::na::::a    a:::::a o::::o     o::::o     
v:::::::v        i::::::ia::::a    a:::::a   n::::n    n::::na::::a    a:::::a o:::::ooooo:::::o     
v:::::v         i::::::ia:::::aaaa::::::a   n::::n    n::::na:::::aaaa::::::a o:::::::::::::::o     
v:::v          i::::::i a::::::::::aa:::a  n::::n    n::::n a::::::::::aa:::a oo:::::::::::oo      
vvv           iiiiiiii  aaaaaaaaaa  aaaa  nnnnnn    nnnnnn  aaaaaaaaaa  aaaa   ooooooooooo       
                                                          
                                              
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2022 By ao",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大聪明」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，大聪明", "color:white; background-color:#23c682", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ Powered by ao %c 你正在访问vianao",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };