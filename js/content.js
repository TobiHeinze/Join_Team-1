/**
 * This array is filled with basic informations and the first tasks and contacts to show how the website is working
 * 
 */
let contentArray = 
	{
	  "users": 
		{
		  "name": ["Annika Rothe", "Albert Wissigkeit", "Tobias Heinze"],
		  "email": ["annika@test.de", "albert@test.de", "tobias@test.de"],
		  "password": ["1234", "1234", "1234"],
		  "photo": ["annika", "albert", "tobias"]
		}
	  ,
	  "settings": 
		{
		  "taskStatus": ["0", "1", "2", "3"],
		  "categoryName": ["Design", "Sales", "Backoffice", "Marketing", "Media"],
		  "categoryBgColor": ["#FF7A00", "#FC71FF", "#1FD7C1", "#0038FF", "#FFC701"],
		  "priority": ["low", "medium", "urgent"],
		  "contactImageBgColor": ["#9327FF", "#FFA800", "#0223CF", "#CB02CF", "#FF7A00", "#FC71FF", "#1FD7C1", "#0038FF", "#FFC701"]
		}
	  ,
	  "contacts": 
		{
		  "name": ["Annika Rothe", "Albert Wissigkeit", "Tobias Heinze", "David Eisenberg", "Barbara Ziegler", "Marcel Bauer", "Stefanie Farber", "Maja Mauer"],
		  "nameInitials": ["AR", "AW", "TH", "DE", "BZ", "MB", "SF", "MM"],
		  "email": ["annika@test.de", "albert@test.de", "tobias@test.de", "david@test.de", "barbara@test.de", "marcel@test.de", "stefanie@test.de", "maja@test.de"],
		  "phoneNumber": [190666666, 1111111111, 3411234567, 84949433994, 1424242345, 4242342342, 3112335567, 234234432],
		  "contactImageBgColor": ["#9327FF", "#FFA800", "#0223CF", "#CB02CF", "#FF7A00", "#FC71FF", "#1FD7C1", "#FFC701"]
		}
	  ,
	  "tasks": 
		{
		  "taskStatus": ["0", "2", "2", "2", "3"],
		  "title": ["Website redesign", "Call potential clients", "Accounting invoices", "Video cut", "Social media strategy"],
		  "description": ["Modify the contents of the main website. Adjust the UI to the companys brand design.", "Make the product presentation to prospective buyers", "Write open invoices for customer", "Edit the new company video", "Develop an ad campaign for brand positioning"],
		  "priority": ["low", "urgent", "medium", "medium", "low"],
		  "dueDate": ["2023-05-20", "2025-06-10", "2023-08-25", "2024-10-01", "2023-09-02"],
		  "categoryName": ["Design", "Sales", "Backoffice", "Media", "Marketing"],
		  "categoryBgColor": ["#FF7A00", "#FC71FF", "#1FD7C1", "#FFC701", "#0038FF"],
		  "subtasks": [
			{
			  "subtask": ["Header", "Footer"],
			  "subtaskStatus": ["open", "closed"]
			},
			{
			  "subtask": [],
			  "subtaskStatus": []
			},
			{
			  "subtask": [],
			  "subtaskStatus": []
			},
			{
			  "subtask": [],
			  "subtaskStatus": []
			},
			{
			  "subtask": ["Content strategy", "Community strategy", "Influencer strategy"],
			  "subtaskStatus": ["closed", "closed", "closed"]
			}
		  ],
		  "assignedTo": [
			{
			  "name": ["Annika Rothe", "Albert Wissigkeit", "Tobias Heinze"],
			  "nameInitials": ["AR", "AW", "TH"],
			  "contactImageBgColor": ["#9327FF", "#FFA800", "#0223CF"]
			},
			{
			  "name": ["David Eisenberg", "Barbara Ziegler", "Annika Rothe", "Albert Wissigkeit"],
			  "nameInitials": ["DE", "BZ", "AR", "AW"],
			  "contactImageBgColor": ["#CB02CF", "#FF7A00","#9327FF", "#FFA800"]
			},
			{
			  "name": ["Tobias Heinze", "David Eisenberg", "Barbara Ziegler", "Marcel Bauer", "Stefanie Farber"],
			  "nameInitials": ["TH", "DE", "BZ", "MB", "SF"],
			  "contactImageBgColor": ["#0223CF", "#CB02CF", "#FF7A00", "#FC71FF", "#1FD7C1"]
			},
			{
			  "name": ["Stefanie Farber"],
			  "nameInitials": ["SF"],
			  "contactImageBgColor": ["#1FD7C1"]
			},
			{
			  "name": ["Marcel Bauer", "Stefanie Farber"],
			  "nameInitials": ["MB", "SF"],
			  "contactImageBgColor": ["#FC71FF", "#1FD7C1"]
			}
		  ]
		}
	}
  ;