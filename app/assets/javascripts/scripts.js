function clientes(){
	window.location = "/customers/index";
}

function pacientes(){
	window.location = "/patients/index";
}

function prospectos(){
	window.location = "/prospectus/index";
}

function doctores(){
	window.location = "/doctors/index";
}

function vacunas(){
	window.location = "/vaccines/index";
}

//Login.jsp

function login(){
    if(validarTextoRequerido('cousucodigo')){
        if(validarTextoRequerido('nousuclave')){
            enviarFormulario("frmLogin");
        }
    }
}

// bckList
function bckListFind(){
    document.frmBckList.method.value = 'bckListFind';
    //TODO Validar formulario
    var yes = true;
    if(yes){
        enviarFormulario('frmBckList');
    }
}

function bckSvcAdd(){
    document.frmBckList.method.value = 'bckSvcAdd';    
    if(validarRadioRequerido("cobaccodigo")){
        enviarFormulario('frmBckList');
    }
}

function bckSvcCancel(){
    document.frmBckList.method.value = 'bckSvcCancel';    
    enviarFormulario('frmBckList');    
}

function bckDetail(){
    document.frmBckList.method.value = 'bckDetail';    
    if(validarRadioRequerido("cobaccodigo")){
        enviarFormulario('frmBckList');
    }
}

// bckNew
function bckNewNext(){
    document.frmBckNew.method.value = 'bckNewNext';
    
    if(validarTextoRequerido("nobacnombre")){
        if(validarSelectRequerido("coaplcodigo")){
            enviarFormulario('frmBckNew');
        }
    }
}
function bckNewCancel(){
    var yes = confirm("Esta seguro de cancelar el registro?");
    if(yes){
        document.frmBckNew.method.value = 'bckNewCancel';
        enviarFormulario('frmBckNew');
    }
}

// bckEstNew
function bckEstNewReqAdd(){
    document.frmBckEstNew.method.value = 'bckEstNewReqAdd';
    
    if(validarTextoRequerido("nocamidReq")){
        if(validarTextoRequerido("nocamnombreReq")){
            if(validarTextoRequerido("txcamdescripcionReq")){
                enviarFormulario('frmBckEstNew');
            }
        }        
    }
}
function bckEstNewReqDelete(){
    document.frmBckEstNew.method.value = 'bckEstNewReqDelete';    

    if(validarRadioRequerido("campoReqId")){
        enviarFormulario('frmBckEstNew');
    }
}
function bckEstNewResAdd(){
    document.frmBckEstNew.method.value = 'bckEstNewResAdd';
    if(validarTextoRequerido("nocamidRes")){
        if(validarTextoRequerido("nocamnombreRes")){
            if(validarTextoRequerido("txcamdescripcionRes")){
                enviarFormulario('frmBckEstNew');
            }
        }
    }
}
function bckEstNewResDelete(){
    document.frmBckEstNew.method.value = 'bckEstNewResDelete';
    //TODO Validar 1 seleccionado
    var yes = true;
    if(yes){
        enviarFormulario('frmBckEstNew');
    }
}
function bckEstNewBack(){
    document.frmBckEstNew.method.value = 'bckEstNewBack';
    enviarFormulario('frmBckEstNew');    
}
function bckEstNewFinish(){
    //TODO 
    document.frmBckEstNew.method.value = 'bckEstNewFinish';
    enviarFormulario('frmBckEstNew');    
}
function bckEstNewCancel(){
    //TODO 
    document.frmBckEstNew.method.value = 'bckEstNewCancel';
    enviarFormulario('frmBckEstNew');    
}

// bckDetail
function bckDetailNext(){
    document.frmBckDetail.method.value = 'bckDetailNext';    
    enviarFormulario('frmBckDetail');    
}
function bckDetailEdit(){
    document.frmBckDetail.method.value = 'bckDetailEdit';    
    enviarFormulario('frmBckDetail');    
}
function bckDetailCancel(){
    document.frmBckDetail.method.value = 'bckDetailCancel';
    enviarFormulario('frmBckDetail');    
}

// bckEstDetail
function bckEstDetailBack(){
    document.frmBckEstDetail.method.value = 'bckEstDetailBack';
    enviarFormulario('frmBckEstDetail');    
}

// bckEdit
function bckEditNext(){
    document.frmBckEdit.method.value = 'bckEditNext';
    //TODO Validar formulario
    
    if(validarTextoRequerido("nobacnombre")){        
        enviarFormulario('frmBckEdit');
    }
}

function bckEditCancel(){
    document.frmBckEdit.method.value = 'bckEditCancel';
    
    if(confirm("Esta seguro de la accion?")){        
        enviarFormulario('frmBckEdit');
    }
}

// bckEstEdit

function bckEstEditReqAdd(){
    document.frmBckEstEdit.method.value = 'bckEstEditReqAdd';
    
    if(validarTextoRequerido("nocamidReq")){
        if(validarTextoRequerido("nocamnombreReq")){
            if(validarTextoRequerido("txcamdescripcionReq")){
                enviarFormulario('frmBckEstEdit');
            }
        }        
    }
}
function bckEstEditReqDelete(){
    document.frmBckEstEdit.method.value = 'bckEstEditReqDelete';    

    if(validarRadioRequerido("campoReqId")){
        enviarFormulario('frmBckEstEdit');
    }
}
function bckEstEditResAdd(){
    document.frmBckEstEdit.method.value = 'bckEstEditResAdd';
    if(validarTextoRequerido("nocamidRes")){
        if(validarTextoRequerido("nocamnombreRes")){
            if(validarTextoRequerido("txcamdescripcionRes")){
                enviarFormulario('frmBckEstEdit');
            }
        }
    }
}
function bckEstEditResDelete(){
    document.frmBckEstEdit.method.value = 'bckEstEditResDelete';
    //TODO Validar 1 seleccionado
    var yes = true;
    if(yes){
        enviarFormulario('frmBckEstEdit');
    }
}
function bckEstEditBack(){
    document.frmBckEstEdit.method.value = 'bckEstEditBack';
    enviarFormulario('frmBckEstEdit');    
}
function bckEstEditFinish(){
    //TODO 
    document.frmBckEstEdit.method.value = 'bckEstEditFinish';
    enviarFormulario('frmBckEstEdit');    
}
function bckEstEditCancel(){
    //TODO 
    document.frmBckEstEdit.method.value = 'bckEstEditCancel';
    enviarFormulario('frmBckEstEdit');    
}

// svcList
function svcListFind(){
    document.frmSvcList.method.value = 'svcListFind';    
    enviarFormulario('frmSvcList');
}
function svcDetail(){
    document.frmSvcList.method.value = 'svcDetail';    
    enviarFormulario('frmSvcList');
}

// svcNew
function svcNewBckAdd(){
    document.frmSvcNew.method.value = 'svcNewBckAdd';    
    enviarFormulario('frmSvcNew');
}
function svcNewBckDelete(){
    document.frmSvcNew.method.value = 'svcNewBckDelete';
    if(validarRadioRequerido("cobaccodigo")){
        enviarFormulario('frmSvcNew');
    }
    
}

function svcNewFinish(){
    document.frmSvcNew.method.value = 'svcNewFinish';
    
    if(validarTextoRequerido("nosernombre")){
        if(validarNumeroRequerido("nuserversion")){
            if(validarSelectRequerido("coplacodigo")){
                if(validarSelectRequerido("cocomcodigo")){
                    if(validarSelectRequerido("coformencodigo")){
                        if(validarSelectRequerido("coflumencodigo")){
                            enviarFormulario('frmSvcNew');
                        }
                    }
                }
            }            
        }
    }
}

// svcEtiList
function svcEtiListFind(){
    document.frmSvcEtiList.method.value = 'svcEtiListFind';    
    enviarFormulario('frmSvcEtiList');
}
function svcEtiDetail(){
    document.frmSvcEtiList.method.value = 'svcEtiDetail';
    if(validarRadioRequerido("noelenombreid")){
        enviarFormulario('frmSvcEtiList');
    }    
}

// svcEtiDetail
function svcEtiDetailDetail(){
    document.frmSvcEtiDetail.method.value = 'svcEtiDetail';
    if(validarRadioRequerido("noelenombreid")){
        enviarFormulario('frmSvcEtiDetail');
    }   
}

// svcEtiNew
function svcEtiValid(){
    document.frmSvcEtiNew.method.value = 'svcEtiValid';
    if(validarTextoRequerido("noelenombre")){
        if(validarSelectRequerido("cotipelecodigo")){
            enviarFormulario('frmSvcEtiNew');
        }        
    }  
}

// svcEstNew
function svcEstValid(){
    document.frmSvcEstNew.method.value = 'svcEstValid';    
    if(validarTextoRequerido("obserestructura")){
        enviarFormulario('frmSvcEstNew');
    }    
}

// Funcionaes comunes
function enviarFormulario(nombreFormulario){
    document.getElementsByName(nombreFormulario)[0].submit();
}
function validarTextoRequerido(nombreCampo){
    if(document.getElementById(nombreCampo).value == "" || document.getElementById(nombreCampo).value == null){
        //TODO parametrizar el mensaje
        alert('Debe ingresar un valor.');
        document.getElementById(nombreCampo).focus();
        return false;
    }
    return true;
}
function validarNumeroRequerido(nombreCampo){
    if(document.getElementById(nombreCampo).value == "" || document.getElementById(nombreCampo).value == null || isNaN(document.getElementById(nombreCampo).value)){
        //TODO parametrizar el mensaje
        alert('Debe ingresar un numero.');
        document.getElementById(nombreCampo).focus();
        return false;
    }
    return true;
}
function validarRadioRequerido(radio){
    var seleccionados = false;
    var listaRadio = document.getElementsByName(radio);
    for(var i=0; i<listaRadio.length; i++){
        if(listaRadio[i].checked==true) {
            seleccionados = true;
        }
    }	
    if(!seleccionados){
        //TODO parametrizar el mensaje
        alert('Debe seleccionar un registro.');
        return false;
    }
    return true;
}
function validarSelectRequerido(select){
    
    var listaSelect = document.getElementsByName(select)[0];
    if (listaSelect[0].selected == true){
        alert("Debe seleccionar una opcion de la lista");
        return false;
    }
    
    return true;
}
function goBack(){
    window.history.back();
}
