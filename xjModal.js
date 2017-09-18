function xjModal(somefn) {
	if (document.getElementById('xjModal')) {
		document.body.removeChild(document.getElementById('xjModal'));
		document.body.removeChild(document.getElementById('xjModalbg'));
	}
	var borbg=document.createElement('div');
	var bodyh=document.body;
	borbg.setAttribute("id","xjModalbg");
	borbg.style.width="100%";
	borbg.style.height="1000px";
	borbg.style.background="blackground";
	borbg.style.opacity="0.8";
	borbg.style.zIndex="8";
	borbg.style.top="0";
	borbg.style.marginLeft="0!important";
	borbg.style.position="fixed";
	borbg.style.background="black";
	borbg.style.display="none";
    borbg.addEventListener("click",function () {
    	borbg.style.display="none";
    	modal.style.display="none";
    }); 
    var myScreenW=screen.width;
	var myScreenH=screen.height;
	var modal=document.createElement('div');//modal
	modal.setAttribute("id","xjModal");
	modal.style.display="none";
	modal.style.zIndex="9";
	modal.style.borderRadius="3px";
	//modal.style.boxShadow="0 0px 4px ";
	modal.style.width="92%";
	modal.style.height="240px";
	modal.style.border="1px solid #ddd";
	modal.style.position="fixed";
	modal.style.backgroundColor="white";
	//modal.style.margin=(myScreenH-220)/4+"px"+" "+(myScreenW-200)/16+"px";
	modal.style.marginTop=(myScreenH-220)/4+"px";
	modal.style.left='5%';
	var modalHead=document.createElement('div');//头部
	modalHead.setAttribute("id","modalHead");
	modalHead.style.textAlign="center";
	modalHead.style.lineHeight="200%";
	modalHead.style.fontsize="16px";
	modalHead.style.height="40px";
	modalHead.style.borderBottom="1px solid #ddd";
	modalHead.style.color="black";
	var headText=document.createTextNode("填写理由");
	modalHead.appendChild(headText);
	modal.appendChild(modalHead);

	var modalContent=document.createElement('div');//content
	modalContent.setAttribute("id","modalContent");
	modalContent.style.textAlign="left";
	modalContent.style.lineHeight="200%";
	modalContent.style.fontsize="16px";
	modalContent.style.height="150px";
	modalContent.style.borderBottom="1px solid #ddd";
	modalContent.style.color="black";
	//var contentText=document.createTextNode("我是身体"+Math.random());
	var m_div1=document.createElement('div');
	var m_div2=document.createElement('div');
	var m_div3=document.createElement('div');
	var m_div4=document.createElement('div');
	var radio1=document.createElement("input");
	var radio2=document.createElement("input");
	var radio3=document.createElement("input");
	var radio4=document.createElement("textarea");
	var m_br=document.createElement("br");
	radio1.style.display="inline-block";
	radio2.style.display="inline-block";
	radio3.style.display="inline-block";
	radio1.style.width="20px";
	radio2.style.width="20px";
	radio3.style.width="20px";
	//radio1.style.marginTop="5px";
	//radio2.style.marginTop="5px";
	//radio3.style.marginTop="5px";
	radio4.style.display="inline-block";
	var radio_n1=document.createTextNode("要价太高");
	var radio_n2=document.createTextNode("对方不够专业,没有维修能力");
	var radio_n3=document.createTextNode("态度太差");
	var radio_n4=document.createTextNode("其他");
	radio1.setAttribute("type","radio");
	radio2.setAttribute("type","radio");
	radio3.setAttribute("type","radio");
	radio1.setAttribute("name","reason");
	radio2.setAttribute("name","reason");
	radio3.setAttribute("name","reason");
	radio1.setAttribute("id","reason1");
	radio2.setAttribute("id","reason2");
	radio3.setAttribute("id","reason3");
	radio4.setAttribute("placeholder","若都不是请简述其他理由...");
	radio4.style.width="92%";
	radio4.style.height="45px";
	radio4.style.marginLeft="10px";
	m_div1.appendChild(radio1);
	m_div1.appendChild(radio_n1);
	modalContent.appendChild(m_div1);

	m_div2.appendChild(radio2);
	m_div2.appendChild(radio_n2);
	modalContent.appendChild(m_div2);

	m_div3.appendChild(radio3);
	m_div3.appendChild(radio_n3);
	modalContent.appendChild(m_div3);

	//m_div4.appendChild(radio_n4);
	m_div4.appendChild(radio4);
	modalContent.appendChild(m_div4);
	//modalContent.appendChild(contentText);
	modal.appendChild(modalContent);

	var modalFoot=document.createElement('div');//footer
	modalFoot.setAttribute("id","modalFoot");
	modalFoot.style.textAlign="center";
	modalFoot.style.lineHeight="200%";
	modalFoot.style.fontsize="16px";
	modalFoot.style.height="50px";
	modalFoot.style.overflow="hidden";
	//modalFoot.style.borderBottom="1px solid #ddd";
	modalFoot.style.color="black";
	//var footText=document.createTextNode("我是脚"+Math.random());
	var btnnode1=document.createTextNode("确定");
	var btnnode2=document.createTextNode("取消");
	var btnSrue=document.createElement('div');
	var btncancle=document.createElement('div');
	btnSrue.style.display="inline-block";
	btncancle.style.display="inline-block";
	btnSrue.style.width="5rem";
	btncancle.style.width="5rem";
	btnSrue.style.color="white";
	btncancle.style.color="white";
	btnSrue.style.marginTop="8px";
	btncancle.style.marginTop="8px";
	btnSrue.style.borderRadius="4px";
	btncancle.style.borderRadius="4px";
	btnSrue.style.backgroundColor="#3399CC";
	btncancle.style.backgroundColor="#CC3300";
	btnSrue.style.float="left";
	btncancle.style.float="right";
	btnSrue.style.marginLeft="16%";
	btncancle.style.marginRight="16%";	
	btnSrue.style.border="1px solid rgba(102,102,102,0.8)";
	btncancle.style.border="1px solid rgba(102,102,102,0.8)";
	btncancle.addEventListener("click",function () {
    	borbg.style.display="none";
    	modal.style.display="none";
    }); 
    btnSrue.addEventListener("click",function () {
    	borbg.style.display="none";
    	modal.style.display="none";
    	function todo(somefn) {
    		somefn();
    		// 写确定之后要干什事情
    	}
    	todo(somefn);

    }); 
	btnSrue.appendChild(btnnode1);
	btncancle.appendChild(btnnode2);
	modalFoot.appendChild(btnSrue);
	modalFoot.appendChild(btncancle);
	//modalFoot.appendChild(footText);
	modal.appendChild(modalFoot);
	document.body.appendChild(borbg);
	document.body.appendChild(modal);
	var mybg=document.getElementById('xjModalbg');
	var mymodal=document.getElementById('xjModal');
	mybg.style.display="block";
    mymodal.style.display="block";
    mymodal.style.opacity="0";   	
	setTimeout(function () {
		mymodal.style.transition="0.5s";
		mymodal.style.transform="translateY(50px)";
    	mymodal.style.opacity="1";   	
	},100);
	
}
