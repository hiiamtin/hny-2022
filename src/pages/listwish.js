import fing from '../img/fing.gif';
import iloveu from '../img/iloveu.jfif';
import getout from '../img/getout.jpg';

const listWish = [
    {
        code: "fing",
        name: "ฟิงฟิง",
        defaultCount: 5,
        balloons: ["รักนะ <3",":)"],
        messages: [
            {
                type:"text",
                count: 0,
                mess:"อาจจะมาบอกช้าไปซักหน่อย //เพราะทำลูกโป่งให้เธอกดอยู่อะค้าบ 🤣",
            },
            {
                type:"text",
                count: 0,
                mess:"กดละมีเอฟเฟคปุ้งๆๆ ด้วยนะ(แต่อันที่ลอยไปลอยมากดไม่ได้ เอาไว้ตกแต่งเฉยๆ555)",
            },
            {
                type:"text",
                count: 0,
                mess:"เว็บโหลดช้าไหม",
            },
            {
                type:"text",
                count: 0,
                mess:"ถ้าช้าโทษเน็ตนะ อย่าโทษเว็บ หยอกๆ",
            },
            {
                type:"text",
                count: 0,
                mess:"แล้วว...",
            },
            {
                type:"text",
                count: 0,
                mess:"ได้สังเกตุเห็นอะไรแปลกๆไหม",
            },
            {
                type:"text",
                count: 0,
                mess:"ใช่ ข้างบนตินตินพิมพ์ชื่อ\"ฟิงฟิง\"ผิดล่ะ",
            },
            {
                type:"text",
                count: 10,
                mess:"ลองกลับไปดูสิ",
            },
            {
                type:"text",
                count: 10,
                mess:"โอ้ใช่ มันถูกแล้วหล่ะ แกล้งเล่นเฉยๆ555",
            },
            {
                type:"text",
                count: 0,
                mess:"ใจเย็นนน อย่าพึ่งรีบปิด 😂",
            },
            {
                type:"text",
                count: 0,
                mess:"ปีที่ผ่านมาเป็นยังไงบ้าง เหนื่อยไหม(กอดๆนะง้าบ 🤗❤️)",
            },
            {
                type:"text",
                count: 0,
                mess:"อยากบอกว่าขอบคุณนะที่เป็นเด็กดี ...รึปล่าว555",
            },
            {

                type:"text",
                count: 0,
                mess:">เด็กดีของเค้า< 😝",
            },
            {
                type:"text",
                count: 0,
                mess:"รักฟิงฟิงน้า ❤️",
            },
            {
                type:"youtube",
                count: 0,
                mess:"SCtOvyHIbcs",
            },
            {
                type:"img",
                count: 0,
                mess: iloveu,
            },
            {
                type:"text",
                count: 0,
                mess:"ปีที่ผ่านมาเพราะโควิดเลยทำให้อะไรหลายๆอย่างไม่เป็นไปตามแพลนเลย<br>ทั้งไม่ค่อยได้เที่ยว+ไม่ค่อยได้เจอกัน",
            },
            {

                type:"text",
                count: 5,
                mess:"ยังดีที่ฟิงฟิงแอบมาหา555🤭",
            },
            {
                type:"text",
                count: 0,
                mess:"เอาล่ะ อะไรที่ผ่านมาแล้วก็ปล่อยมันผ่านไป มาเข้าเรื่องปีใหม่กันดีกว่า",
            },
            {
                type:"text",
                count: 10,
                mess:"🎉!!Happy new year 2022!!🎉",
            },
            {
                type:"text",
                count: 20,
                mess:"ปีใหม่นี้ขอให้เธอมีความสุขมากกว่าปีที่ผ่านๆมา<br>ใกล้เรียนจบแล้วก็ขอให้ทุกอย่างผ่านไปได้ด้วยดี เรียนจบปุ๊บมีงานปั๊บ<br>หรือถ้าจะเรียนต่อก็ขอให้ได้ทุนนะค้าบ สู้ๆเป็นกำลังใจให้เสมอนะ😘<br>แล้วก็ขอให้สุขภาพแข็งแรง รวยๆๆๆ จะได้ไปเที่ยวกับเค้าอีกเยอะๆ<br>Goooo😎",
            },
            {
                type:"text",
                count: 10,
                mess:"แล้วก็งอแงน้อยลงหน่อยนะค้าบ5555",
            },
            {
                type:"text",
                count: 10,
                mess:"ของขวัญปีนี้ให้ไปแล้วเนอะไปหาจังหวะขายเอานะจ๊ะ 😉",
            },
            {
                type:"text",
                count: 10,
                mess:"แต่ถ้าอยากได้อะไรก็บอกน้า",
            },
            {
                type:"text",
                count: 10,
                mess:"ให้ได้เสมอออ ถ้ามีตังค์5555",
            },
            {
                type:"text",
                count: 20,
                mess:"ค่อยๆเลื่อนงับจะหมดแล้ว",
            },
            {
                type:"text",
                count: 10,
                mess:"สุดท้ายนี้อยากบอกฟิงฟิงว่า",
            },
            {
                type:"text",
                count: 10,
                mess:"ว่า",
            },
            {
                type:"text",
                count: 10,
                mess:"ว่าาาาา",
            },
            {
                type:"text",
                count: 10,
                mess:"ว่าาาาาาาาาาา",
            },
            {
                type:"text",
                count: 10,
                mess:"สมัคร Zipmex วันนี้ - KYC รวดเร็ว ไม่เสียเวลานาน<br>สมัครฟรีกับ Zipmex เทรดง่าย 24 ชั่วโมง ค่าธรรมเนียมต่ำ ยืนยันตัวตนเร็ว สมัครบัญชีเลยตอนนี้",
            },
            {
                type:"text",
                count: 10,
                mess:"ล้อเล่น อ่ะสุดท้ายละๆ555",
            },
            {
                type:"text",
                count: 10,
                mess:"บอกว่า รักที่สุดเลยยยยย❤️",
            },
            {
                type:"text",
                count: 10,
                mess:"Never give up on something you really want. However impossible things may seem, there's always a way.",
            },
            
        ],
        gif: fing,
        horoscope: 'https://www.sanook.com/horoscope/215349/'
    },
    {
        code: "aom",
        name: "ออม (aka ตัวน้อย)",
        defaultCount: 30,
        balloons: [""],
        messages: [
            {
                type:"text",
                count: 0,
                mess:"เว็บโหลดช้าไหม",
            },
            {
                type:"text",
                count: 0,
                mess:"ถ้าช้าโทษเน็ตนะ อย่าโทษเว็บ หยอกๆ",
            },
            {
                type:"text",
                count: 0,
                mess:"ลูดโป่งนี่กดละมีเอฟเฟคปุ้งๆๆ ด้วยนะ(แต่อันที่ลอยไปลอยมากดไม่ได้ เอาไว้ตกแต่งเฉยๆ555)",
            },
            {
                type:"text",
                count: 0,
                mess:"แล้วได้สังเกตุเห็นอะไรแปลกๆปล่าว",
            },
            {
                type:"text",
                count: 0,
                mess:"ใช่ ข้างบนฉันพิมพ์ชื่อ\"ออม\"ผิดล่ะ",
            },
            {
                type:"text",
                count: 10,
                mess:"ลองกลับไปดูสิ",
            },
            {
                type:"text",
                count: 10,
                mess:"โอ้ใช่ มันถูกแล้วหล่ะ แกล้งเล่นเฉยๆ555",
            },
            {
                type:"text",
                count: 0,
                mess:"ใจเย็นนน อย่าพึ่งรีบปิด 😂",
            },
            {
                type:"text",
                count: 0,
                mess:"sorry sorry เข้าเรื่องละ",
            },
            {
                type:"text",
                count: 0,
                mess:"ปีที่ผ่านมาเป็นยังไงบ้าง",
            },
            {
                type:"text",
                count: 0,
                mess:"เห็นบ่นมานานในที่สุดก็มีคนคุยซักที ดีใจด้วย5555",
            },
            {
                type:"text",
                count: 0,
                mess:"เอาล่ะ อะไรที่ผ่านมาแล้วก็ปล่อยมันผ่านไป มาเข้าเรื่องปีใหม่กันดีกว่า",
            },
            {
                type:"text",
                count: 30,
                mess:"🎉!!Happy new year 2022!!🎉",
            },
            {
                type:"text",
                count: 30,
                mess:"ปีใหม่นี้ขอให้มีความสุข<br>สุขภาพแข็งแรง มีผู้ชายมีเงินมีทองใช้ไม่ขาดมือ",
            },
            {
                type:"text",
                count: 10,
                mess:"ปีใหม่แล้วขอให้เจออะไรใหม่ๆ",
            },
            {
                type:"text",
                count: 0,
                mess: "แม้ว่าจะมีอะไรเก่าๆไม่ยอมออกไปซักทีแต่ ช่างมันเถอะ",
            },
            {
                type:"text",
                count: 10,
                mess:"โฟกัสกับสิ่งที่ต้องเป้าไว้",
            },
            {
                type:"text",
                count: 10,
                mess:"อย่าพึ่งทิ้งความฝันซะล่ะ สู้ๆ",
            },
            {
                type:"text",
                count: 10,
                mess:"สุดท้ายนี้อยากบอกว่า",
            },
            {
                type:"text",
                count: 20,
                mess:"ว่าา",
            },
            {
                type:"text",
                count: 20,
                mess:"ว่าาา",
            },
            {
                type:"text",
                count: 10,
                mess:"ว่าาาา",
            },
            {
                type:"text",
                count: 10,
                mess:"(อดทนไว้ใกล้ละๆ)",
            },
            {
                type:"text",
                count: 10,
                mess:"ว่าาาาา",
            },
            {
                type:"text",
                count: 40,
                mess:"สมัคร Zipmex วันนี้ - KYC รวดเร็ว ไม่เสียเวลานาน<br>สมัครฟรีกับ Zipmex เทรดง่าย 24 ชั่วโมง ค่าธรรมเนียมต่ำ ยืนยันตัวตนเร็ว สมัครบัญชีเลยตอนนี้",
            },
            {
                type:"text",
                count: 10,
                mess:"ล้อเล่นๆ",
            },
            {
                type:"text",
                count: 10,
                mess:"เอาดีๆละ",
            },
            {
                type:"text",
                count: 10,
                mess:"ขอให้เรียนจบ แล้วได้ทำตามที่ใจต้องการนะ<br>แล้วก็ประสบความสำเร็จตามที่วาดฝันไว้<br>ถ้ามีแฟนแล้วก็อย่าลืมฟิงฟิงด้วย555",
            },
            {
                type:"text",
                count: 10,
                mess:"The future starts today, not tomorrow.",
            },
        ],
        gif: fing,
        horoscope: 'https://www.sanook.com/horoscope/215381/'
    },
    {
        code: "champ",
        name: "แชมป์",
        defaultCount: 30,
        balloons: [""],
        messages: [
            {
                type:"text",
                count: 0,
                mess:"อาจจะมาบอกช้าไปซักหน่อย //เพราะเที่ยวอยู่ 🤣",
            },
            {
                type:"text",
                count: 0,
                mess:"แต่แชมป์คงไม่ว่าอะไรหรอก เพราะแชมป์ก็เที่ยวอยู่",
            },
            {
                type:"text",
                count: 0,
                mess:"เว็บคุ้นๆไหม",
            },
            {
                type:"text",
                count: 0,
                mess:"ใช่แบบที่คิดอยู่นั่นแหละ",
            },
            {
                type:"text",
                count: 0,
                mess:"ก็อบไอเดียมายังไงล่ะะะะ😎",
            },
            {
                type:"text",
                count: 0,
                mess:"กดละมีเอฟเฟคปุ้งๆๆ ด้วยนะ(แต่อันที่ลอยไปลอยมากดไม่ได้ เอาไว้ตกแต่งเฉยๆ555)",
            },
            {
                type:"text",
                count: 0,
                mess:"แล้วได้สังเกตุเห็นอะไรแปลกๆปล่าว",
            },
            {
                type:"text",
                count: 0,
                mess:"ใช่ ข้างบนฉันพิมพ์ชื่อ\"แชมป์\"ผิดล่ะ",
            },
            {
                type:"text",
                count: 10,
                mess:"ลองกลับไปดูสิ",
            },
            {
                type:"text",
                count: 10,
                mess:"โอ้ใช่ มันถูกแล้วหล่ะ แกล้งเล่นเฉยๆ555",
            },
            {
                type:"text",
                count: 0,
                mess:"ใจเย็นนน อย่าพึ่งรีบปิด 😂",
            },
            {
                type:"text",
                count: 0,
                mess:"sorry sorry เข้าเรื่องละ",
            },
            {
                type:"text",
                count: 0,
                mess:"ปีที่ผ่านมาเป็นยังไงบ้าง เหนื่อยไหม",
            },
            {
                type:"text",
                count: 0,
                mess:"ถึงเหนื่อยก็ยังไหวอยู่ ...รึปล่าว555",
            },
            {
                type:"text",
                count: 10,
                mess:"ปีที่ผ่านมาตอนแรกก็คิดว่าไม่มีอะไร แต่จริงๆก็ถือว่าเป็นปีที่เราเรียนจบกันมาเลยนะ<br>(ยังรู้สึกเหมือนไม่จบ-..-)",
            },
            {
                type:"text",
                count: 5,
                mess:"แล้วก็เริ่มทำงานที่แรก",
            },
            {
                type:"text",
                count: 5,
                mess:"กับงานที่เรารักแล้วนั้นอยากบอกเอาไว้ว่า",
            },
            {
                type:"youtube",
                count: 15,
                mess:"drEO2tytrkg?start=13",
            },
            {
                type:"text",
                count: 10,
                mess:"ล้อเล่น ดีใจด้วยที่ผ่านอะไรต่างๆมาได้ไปอีกปี",
            },
            {
                type:"text",
                count: 10,
                mess:"ที่แบบว่าถ้าไม่มีโควิดคงดีกว่านี้เยอะเลย😭",
            },
            {
                type:"text",
                count: 0,
                mess:"เอาล่ะ อะไรที่ผ่านมาแล้วก็ปล่อยมันผ่านไป มาเข้าเรื่องปีใหม่กันดีกว่า",
            },
            {
                type:"text",
                count: 30,
                mess:"🎉!!Happy new year 2022!!🎉",
            },
            {
                type:"text",
                count: 10,
                mess:"ปีใหม่นี้ขอให้มีความสุขกับชีวิตให้มากขึ้นนะ<br>สุขภาพแข็งแรง มีเงินมีทองใช้ไม่ขาดมือ //จะได้เปิดร้านต่อไป555",
            },
            {
                type:"text",
                count: 10,
                mess:"ปีใหม่แล้วขอให้เจออะไรใหม่ๆ",
            },
            {
                type:"img",
                count: 5,
                mess: getout,
            },
            {
                type:"text",
                count: 0,
                mess: "แม้ว่าจะมีอะไรเก่าๆไม่ยอมออกไปซักทีแต่ ช่างมันเถอะ",
            },
            {
                type:"text",
                count: 10,
                mess:"โฟกัสกับสิ่งที่ต้องเป้าไว้",
            },
            {
                type:"text",
                count: 10,
                mess:"อย่าพึ่งทิ้งความฝันซะล่ะ สู้ๆ",
            },
            {
                type:"text",
                count: 10,
                mess:"สุดท้ายนี้อยากบอกว่า",
            },
            {
                type:"text",
                count: 20,
                mess:"ว่าา",
            },
            {
                type:"text",
                count: 20,
                mess:"ว่าาา",
            },
            {
                type:"text",
                count: 10,
                mess:"ว่าาาา",
            },
            {
                type:"text",
                count: 10,
                mess:"(อดทนไว้ใกล้ละๆ)",
            },
            {
                type:"text",
                count: 10,
                mess:"ว่าาาาา",
            },
            {
                type:"text",
                count: 40,
                mess:"สมัคร Zipmex วันนี้ - KYC รวดเร็ว ไม่เสียเวลานาน<br>สมัครฟรีกับ Zipmex เทรดง่าย 24 ชั่วโมง ค่าธรรมเนียมต่ำ ยืนยันตัวตนเร็ว สมัครบัญชีเลยตอนนี้",
            },
            {
                type:"text",
                count: 10,
                mess:"ล้อเล่นๆ แคปข้อความก่อนหน้านี้มาสิ<br>แล้วส่ง email ที่ผูกกับ zipmex มามีของขวัญจะให้",
            },
            {
                type:"text",
                count: 10,
                mess:"If you get tired, learn to rest not to quit.",
            },
        ],
        gif: fing,
        horoscope: 'https://www.sanook.com/horoscope/215393/'
    }
]

export default listWish;