// Get all of our friend data
var time_data = require('../data.json');
var data = require('../store.json');
var store_id = 0;
var n = 3;
exports.view = function(req, res){

	if(req.query.description > 0){
		console.log("adsaasdasdasdasdasdasd");
		var newFriend = JSON.parse('{ "name": "' +
			req.query.name+'", "description": "'+
			req.query.description+'", "imageURL": "'+'black"}');
		time_data["friends"].push(newFriend);
	}
	console.log("check store-num before" +data);
	//var val = data['stores'];
	data["store_num"] = Number(0);
	data["ralps_num"]=true;
	//console.log(data);
	console.log("xxxxxxxxxxxxxxxx");
	console.log(req.query.item);
	res.render('homepage',data);
	console.log(req.query.edit_ok);
	if(req.query.edit_ok == undefined)
	//console.log(" title= "+req.query.title)
	{
		console.log(req.query.edit_ok);
	if(req.query.title != undefined){
		var title = req.query.title;
		var date = req.query.month + ","+req.query.date+" 2016";
		var items = req.query.item;
		var it_list = items.split(",");
		console.log(items);
		 newList = {
					"id": "list"+n,
					"title":title,
					"date": date,	
					"items":it_list,
					"store_id":"ralphs"					
					};
		
		n=n+1;
		var val = data['stores'];
		var val2 = val[0];
		val2['lists'].push(newList);
		console.log("\nnew json= \n" + data);
		}
	}
	else

	{
		console.log("ya man!!");
		var val = data['stores'];
		var val2= val[0];
		var val3 = val2['lists'];
		for(i=0;i<val3.length;i++)
		{
			var vall = val3[i];
			console.log("prnt");
			console.log(vall['id']);
			console.log(req.query.list_id)
			if(vall["id"] == req.query.list_id)
			{
				console.log("idididid");
				var items = req.query.item;
				var it_list = items.split(",");
				
				vall["items"] = it_list;
			}
		}

	}
};