function step_timer(qid, seconds, milisec){ 

 if (milisec<=0){ 
    milisec=9 
    seconds-=1
 } 
 if (seconds<=-1){ 
    milisec=0 
    seconds+=1
    //$('stumper').style.display = '';
 } 
 else 
    milisec-=1 
    $("d2_" + qid).value=seconds+"."+milisec 
    setTimeout("step_timer(" + qid + ", " + seconds + ", " + milisec + ")", 100)
 	if (ct > 0) {
		$('d2').style.display = 'none';
		if (seconds == 0) {
			seconds += 100;
			//$('out').style.borderColor = '#211eab';
			return;
		}
		//old = parseInt($('out').style.width.replace('px', ''))
		//$('out').style.width = old - 5 + 'px';
	} else {
	if (seconds < 4) {
		//$('out').style.border = '5px solid #f5573d';
		//$('d2').style.color = "white";
	}
} }