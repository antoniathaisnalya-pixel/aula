const multiplicaçao=requere(multiplicar);


test("deve multiplicar dois numeros positivos",
()=>{
    expect(multiplicaçao(4,5)).ToBe(20);
})
test("deve multiplicar um numero positivo por um negativo", ()=>{
    expect(multiplicaçao(4-5)).ToBe(-20);
})
test("deve multiplicar 4 por 5 e retornar 25",
()=>{
    expect(multiplicaçao(4,5)).ToBe(25);
})



test("deve multiplicar dois numeros negativo",
    ()=>{
        expect(multiplicaçao(-4,-5)).ToBe(20);
    })