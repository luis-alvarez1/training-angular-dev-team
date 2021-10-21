import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Giancarlo";
  textoPlaceHolder = "Escriba esto aqui";
  desabilitado  = true;
  imgsrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/FBMVEX////DDi7dAzDbBDDdAC7QCi/NCi/dACzCACbcACjCACjCCSvcACfvx832xc3gFUH74+jnVW/IHz7UW27bABvAABjyvMHpvcHcACHBACLcACDBACP++fr78PL97/LAABzul6T73+W+AAC/ABLGADHhmqPaAADpXHjqtLz00NfOPlb13eD42N3WYXTkTmXQUmTrgpPdhZLwqbPxoa/OSVzbdobYYnfzsr3mq7PKMkrhNVHgADvKLEbgJEXyqLXlPmHNABLrdYrmY3TraYTjLVPcgY7rgZDwjqPRQ13ehJHpYXrYbn7hkZ3pc4TrjpfnbXznRmnkVGfKP1HhRFfpWro6AAAN6ElEQVR4nO2deVvaTBeHCeCbjSUiIEgIULSIsilYUFDqbuvSPu33/y5vWJRlJsnMnINor/yu569HnHI7kznLnDkJBHz58uXLly9fvnz58uXLly9fvnz58uXLly9fvigyjZhlrvtLrE5542KY+V546Bn5dX+VVShfSl8Gk3J4Q1JSuyfbh/8aZC39cpPJhIPB4IYkSXq2cPC0fbjuL4WnWre4GdqRg2ONCG1phd2tvX8DMp8u/neeUcPB4AKhPZFKdrC1F/vs+061eHUWVuXgTG+EY0j9tP5UW/eXFFe+vXkWWsBbIhxDSn+2jj/nttOthELyEh5JOILUpER9f91fl1fR63AyQuJRCcczmdIfq+v+0qwyrVJxahmYCacWZO8zWEmr1q1kdqiz5044tiCF+v7HhrSq6bt4MuKM505oS0klbrdrHxWy2r0bqhmX6WMgHK1W7eFo/wNaEKvbasTpewsf4Wi15hLNo31r3UjzMmOtq/OI6rS58BKO9tbcoH4UXTfXq0qtxnlw2bDDCKWJv9M8MtYNZ09fuxEKUgw7mFAauwJS82K9jmu3kkyyLU4RwvFMpsrf1uTvmFa11fewDHDCkWwLclR779yHaVTbtt/CsTinCscPEjo3o16w/Z3aOz6TVvW4EnTzW5wVuYrVFW5CaRwx13vVd7EgZvX4+WaH8+GbqRjYEwEcTaRSODjpVVe9Wkvtu2FQYHVOpTZqgcOO0CSOJzIrdW6PV7hazYvnRp/Fb3FU+NIe5pb/QZyDtP2dk95qJjJ22YirwqtzLPksZg9UPYUg2qtVSzRv0f0d434YCssgPFvq5niwpgYhHEFqutR5wtt2zEBx+HUHjGev0VBsPGBMAk3iFLLw5WEvgLBc81a6kklCnr2Z5OF00A50EifSUtlv2zBXwDRirfMdfr/FQcnudNz9MgqhrVxh8CNqiENWh7K4ZSAk998G3oUv01fpBa0jnsOKfkXDs5Vsvw28l0IjtPVFnNBIIgKGg7PNL484iZKUEt9VjTjeGg1mWnMjPxXwAPWEOKGFSliaG/kQk3AAIKyoeICX8znC/EkWjVCpi2cfrZ9oliIYWUwQHubQCHMAQvM+gwZ4vbiUrEc0xMKTuD00L3awCOX00tjbOH7NiBASakSxzEXkqrQ09KFYrE9RGRJnVLFWqdwmxu5hTWIWcgRQ68MjipHUBul21Jo4k6gnQITnSFFFizL4E84k6qeQig6jgWIQJ7H9sqJ/UBCVJiRxY+AYRPWZOvoJDmEdQph/wdhq5PMudfT9AYb/nX2CHKjmiyiEmw7Db2FMYmEPFOWnUQzihcPoPQRAKbUNAQykEZ5D+czxj3yAMIk5GGEMwSAmi47DI8T6egKWOq3egA1iWHZ+TkwNvNfoB7BKo2oDTJi5dBkfHiZqHVjdRukn2ORH3CJwCxxDKXVYkar1DN1qIhXXzfwbFDF3Asvu5++gBjGyHDYt6hC6TLNHwAqqY2AMHKm4/4nzdeAkFnowwMAxcKdRaT73vKLAGEqDEnZhBjGy6eUWG1sgRD0BrUVJn4EmUT32chrNHozwFObS2E7NXwihPFw2VlZ0+bmsiZ/r29IOoKfBtf8gBlEtLk9hdHPZBTH3IITKFrRQ07gCEJKxvdn+TuT+opBzfeURWpphQgxi5G6ZpjRUO8s+iHkLMBjZIyBgIACI8imxfXpno0BsDWnAJGafwIRF8SlUfy1PoVWJbJDHDOYjIEzcAxO2hQ2iHCdi+1omvCFlCVe5J1DNN5GeOAYTXginTOUG4bC1MsENqfBj+X9bTWHCAbz4NCZu8u8Jkr5sE+q7BPmTIKCk//HyCr0lHAPL5wRIOzmuoE0RK8sSzStC49+RSqKEGTKTPzo03xg9PMRPfggGUbCE91S/BGPgJDGFsVFqclQFXSaWliVYQ6Q8wgFFCSNkGrgSmRIq34ifbYlZ/RwGYUtwConYvhZ6u+ksET80BCcR7tIEAvchoSmsEANdjg3ruFZfPyF+Kpiwgbs0oiZfXT63D1iTOGxMqHWIh3RbJMLAMPh2lC9i8tXfBMJFfG4OE0TuIS9yJIxh8G2DKGLyI0Rsn5+GYZMbJcojEfv3BAyGfopxtbYkQCgPCTP16htNCCm+iCFQV6v9QSncFzD5mfbyFJkvSz0ViDIfc49/ErUmBmCA/yxfviGSJ9XXUaaESpNwtwRq+BUcwmvuvXTnhXjKuq8/e7vZRewRJn9Jpo5h8F/tGM8UkqUXpc1Xz+iVMLdFhIn8CRuKXRVRm9fkq8+kS/pmVF8J9V0im2GdcBsMDHNoGzJOQkp6Jv/ydvzxtkoLZA0Ff3EGNKU/Ee9Jt3pFTGF1Vmw8695CVmtZnNV8egKn00SJjzDcJ6r0zPYsYTe7Q0qpmjzmS9joCaR7bHzV3vJf4p+1hrMRZoTaAbFMLb5CMEooLSZOp4aM7dNzh5Bz94DJzGngiAdQ0k6RCH/zmPxwiFw5lbkgeo4wRwbCBtelLySDv/gFPRX5Sfx+ab6wav4ud5ksMuAKEyl/IjFx1bMnySm8nv8LzRNmSZeEK9YvYMS/IxU5zvLV3+TvR+b34oVOWFnywzyniQV4Sn+iKkf5XpLM0N4v/IEWOg5QJiHKUQhWxmq8xHHBSx2Sv764FS8Qagfkxx/YJ7GMdq2b/ZJekqyV7e4k5/U9NadygcxC7LNP4hcswECY1amhxPaBanpR2wsik/IWc0mmrqMRMhcoJonYnl8mc0mmPkBgm4jV5Ms3GP2daqxhIlIOY6RrRpO/84LRpYs51s/ixL8jMRpEOQ4/zBspyhgmoplDeztkMxeRS5w2BxZjcUaKyKsLq8ZEKMex2h1ts4WJZbyubiaTQYz8wupUwXj98gteixMzyGAQw32naxX8YirO0HcRCVkMovofXmscg+WYRh8gErLc6Q7RbuCJiqU4Q6kjEjIYRPkMs7uRwZCwQTnhfhXDBS+ZjO0hYigEQzSHgcCFp7kI93Ebcpa895oUTjp4Iu8YWHW6gScq770GLf4dyTsGTmL3Oa56JmwALU1IGV5pb/mG8h1jNEWpoizxU48nkVIeB5DlZRApsX3gJk5TgipKNsOr1ZJ+ikq46W4Q5XPSNMW+yuEw8V9wQ6fpC1lxb3pEGMoWZkNlyyMpnKQ4bJvUXwn9z+HrkgP03GN9SNMWUqa7QZT7pLUv0c9zHAhpp0iGe6slSEsTGqFrDLxzT/5j9/SPOhDSyrc8Yn3gHe5luUaI4RC5FZoOd22cCJUO+X0PXScRMTocydXkZ1rkrjat8WImpNSBBfJHbhU2KVxCtyYn4T4lPfPLYfN1XKW0WtioyyTCWppQCF0MYuYXuUs4XghzJKR1zrNcLkLDWpqQKv12JAyHKCUfRaf6DUdC6t2QnvOBqYZR4T0nlyYnkSvKRn/l9HFnwhylR4nhfIdWecRtm2y1HA1iqEh+vOuwz7gRUm+DOrdVBt9wXpJzkxP5L/n85O8cZ9xlldK+c82xJBPZHLo0OZEpLRNcim5dCDVa/4dbJ0JgSxN2QmqDpGNn6+lCKJUpQbtjSSY6YcyhbEi+Jj9ruEQiboTKFmV7dEjYQFuaUAjp9ezhEOXsIOYSiLgRSlnKt3Zoq4xT4T2vGr0WmnZun790CUTcCW8p+yO9OEMja4yBcmhyQovtXfu6uhJSK/HosT60pQkpepMTOU75aNvNS3clpCcIqXlFaEsTUnmqyac2SHLN6bgTUkvxqOf6WdT4dyxak5P55sdvirlmHt0JpRRlr6G2VQa3NKEQUmZmh3YY457S8SCk1uLdUmJ9cEsTUpQmJ9Qp9DhN9SCknnpSJhHe0oRCSBrEyCVlc/coZPQipHUQoDRd0AfYLg01ppW7BimPm25ehPqAMuY+4ddoHfwXelHudPcbm4SGrnzehJL0sEWoubv8IcqlIrBoQa2sEvI6Dvcm1BRCpGsKb2lCCtTkhIeQSYXbFbxqphvHQMQhLKxgKx29zqOVhPfcxSBUUkeAl3a4qjT8Cm2jCCfUyg+rfD9ZdxiEMUIJNelgxa/SM9t/QxBGGKEmdbATUBQZ93953uiISKhpnaf3eYFetXXm+ELj1RHq2dOjd3vtsxl77gt2PBEmzO2eRN/zLY9W+qfYe5IECbVsffu9X59rdM9EXvIoRKgXDtbyemCjKODliBBmE3vrev2xcc37Jll+Ql0poyeduBiHIT5GTkJdk1bqwbAo1ujzMHIR6kqig3PBASSz3eizbzk8hJrU9Gzw+j4qFYfMr+VmJ9SVzt66F+hM1ZdzxnumzISFwdO7eTAsMqN3GSYvh5EwVzha+Zt/eZWPVVhe5slEqKXqUdxTehxZ3RtvT46BcOTBfES+kax7z/c9exLq2V3E9+Diy7ruu2+rHoS6llirB8Oi2ua5W4DsfkKqJbbcXzTwMdS9igtVKtgeTH3FORgsWRdXQSdGZ0JFqvc++gKdqdQeOryD3bG+NNvpfRwPhkU1h+DRgdAOAfGPWlYss3QZoXg5VEIld3L40TwYFuVjv8k8B4VQLzQ/pAfDIrMbX/bkCEI9ldj/jPP3puKSdVwi1LUB5i3Ctci4PJv3chYIdeX09nNtoHTFrs9npmOOUFcGjx8qBBSX2X2ORwjCbOLkcz+AC7K6V2F1gdD2YD5siCQm42Li5UwI9dxn82AYZBr3ocyU0A4BV3VMvVaZViWp2oRK6lv+X+QbyawOk9nyw6fzQLmUrnyAJLYvX758+fLly5cvX758+fL1D+r/VkCER/t1HxAAAAAASUVORK5CYII="

  constructor() {
    setInterval(() => this.desabilitado = false, 3000)
  }

  //Crear funcion para sumar valor
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
}
