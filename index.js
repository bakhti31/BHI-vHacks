function check () {
	var software = document.getElementById('soft').value;
	var level = document.getElementById('lvl').value;

	var output = document.getElementById('output');

	console.log(software)
	console.log(level)
	fwpro = (7/10)
	bppro = (10/10)
	avpro = (10/10)
	ipsbp = (7/10)
	ipsfw = (6.7/10)
	scanfw= (2/10)
	scan = (10/2)
	fwips = (10/6.7)
	bpips = (10/7)
	mulsdk = (10/7)
	mulbf = (10/10)
	mulmwk = (10/10)
	var text = ""
	if (software = "fw") {
		text += `You can hiding from user with Scan under ${scanfw * level}
		<br> You can Block user with SDK under ${fwpro * level}
		<br> and you can print IP user with IPS under + ${ipsfw * level}`
	}
	else if (software = "bp") {
		text += `You can Block user with Bruteforce under ${bppro * level}
		<br> and you can print IP user with IPS under + ${ipsbp * level}`
	}
	else if (software = "av") {
		text += `You can Block user with MWK under ${avpro * level}`
	}
	else if (software = "sdk") {
		text += `You can Attack user with Firewall under ${mulsdk * level}`
	}
	else if (software = "bf") {
		text += `You can Attack user with Bank Protection under ${mulbf * level}`
	}
	else if (software = "mwk") {
		text += `You can Attack user with AntiVirus under ${mulmwk * level}`
	}
	else if (software = "scan") {
		text += `You can Scan user with Firewall under ${scan * level}`
	}
	else if (software = "spam") {
		text += `You can Block user with SDK under ${fwpro * level}
		<br> and you can print IP user with IPS under + ${ipsfw * level}`
	}
	else if (software = "ips") {
		text += `You can Block user with SDK under ${fwpro * level}
		<br> and you can print IP user with IPS under + ${ipsfw * level}`
	}

	output.innerHTML = text
}