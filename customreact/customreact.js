function customRender(reactelement,maincontainer){
    const domelement=document.createElement(reactelement.type)

    domelement.innerHTML=reactelement.children
    for (const prop in reactelement.props) {
        if(prop==='children') continue;
        domelement.setAttribute(prop,reactelement.props[prop])

    }
    maincontainer.appendChild(domelement)
}


const maincontainer=document.querySelector('#root')

const reactelement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:"Click on me to open google"

}

customRender(reactelement,maincontainer)