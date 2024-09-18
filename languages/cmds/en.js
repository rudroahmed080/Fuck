module.exports = {
	// You can customize the language here or directly in the command files
	onlyadminbox: {
		description: "𝚃𝚞𝚛𝚗 𝚘𝚗/𝚘𝚏𝚏 𝚘𝚗𝚕𝚢 𝚊𝚍𝚖𝚒𝚗 𝚋𝚘𝚡 𝚌𝚊𝚗 𝚞𝚜𝚎 𝚋𝚘𝚝",
		guide: "   {pn} [𝚘𝚗 | 𝚘𝚏𝚏]",
		text: {
			turnedOn: "𝚃𝚞𝚛𝚗𝚎𝚍 𝚘𝚗 𝚝𝚑𝚎 𝚖𝚘𝚍𝚎 𝚘𝚗𝚕𝚢 𝚊𝚍𝚖𝚒𝚗 𝚘𝚏 𝚐𝚛𝚘𝚞𝚙 𝚌𝚊𝚗 𝚞𝚜𝚎 𝚋𝚘𝚝",
			turnedOff: "⫷ 𝕋𝕦𝕣𝕟𝕖𝕕 𝕠𝕗𝕗 𝕥𝕙𝕖 𝕞𝕠𝕕𝕖 𝕠𝕟𝕝𝕪 𝕒𝕕𝕞𝕚𝕟 𝕠𝕗 𝕘𝕣𝕠𝕦𝕡 𝕔𝕒𝕟 𝕦𝕤𝕖 𝕓𝕠𝕥 ⫸",
			syntaxError: "𝚂̷𝚢̷𝚗̷𝚝̷𝚊̷𝚡̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷, 𝚘̷𝚗̷𝚕̷𝚢̷ 𝚞̷𝚜̷𝚎̷ {pn} 𝚘𝚗 𝚘𝚛 {pn} 𝚘𝚏𝚏"
		}
	},
	adduser: {
		description: "𝐀𝐝𝐝 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐛𝐨𝐱 𝐜𝐡𝐚𝐭 𝐨𝐟 𝐲𝐨𝐮",
		guide: "   {pn} [𝚕𝚒𝚗𝚔 𝚙𝚛𝚘𝚏𝚒𝚕𝚎 | 𝚞𝚒𝚍]",
		text: {
			alreadyInGroup: "𝐀𝐥𝐫𝐞𝐚𝐝𝐲 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩",
			successAdd: "✅ | 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚊𝚍𝚍𝚎𝚍 %1 𝚖𝚎𝚖𝚋𝚎𝚛𝚜 𝚝𝚘 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙",
			failedAdd: "❎ | 𝙵̷𝚊̷𝚒̷𝚕̷𝚎̷𝚍̷ 𝚝̷𝚘̷ 𝚊̷𝚍̷𝚍̷ %1 𝚖̷𝚎̷𝚖̷𝚋̷𝚎̷𝚛̷𝚜̷ 𝚝̷𝚘̷ 𝚝̷𝚑̷𝚎̷ 𝚐̷𝚛̷𝚘̷𝚞̷𝚙̷",
			approve: "⚠ | 𝐀𝐝𝐝𝐞𝐝 %1 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐡𝐞 𝐚𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐥𝐢𝐬𝐭",
			invalidLink: "⚠ | 𝙿̷𝚕̷𝚎̷𝚊̷𝚜̷𝚎̷ 𝚎̷𝚗̷𝚝̷𝚎̷𝚛̷ 𝚊̷ 𝚟̷𝚊̷𝚕̷𝚒̷𝚍̷ 𝚏̷𝚊̷𝚌̷𝚎̷𝚋̷𝚘̷𝚘̷𝚔̷ 𝚕̷𝚒̷𝚗̷𝚔̷",
			cannotGetUid: "❎ | 𝙲̷𝚊̷𝚗̷𝚗̷𝚘̷𝚝̷ 𝚐̷𝚎̷𝚝̷ 𝚞̷𝚒̷𝚍̷ 𝚘̷𝚏̷ 𝚝̷𝚑̷𝚒̷𝚜̷ 𝚞̷𝚜̷𝚎̷𝚛̷",
			linkNotExist: "⚠ | 𝚃̷𝚑̷𝚒̷𝚜̷ 𝚙̷𝚛̷𝚘̷𝚏̷𝚒̷𝚕̷𝚎̷ 𝚞̷𝚛̷𝚕̷ 𝚍̷𝚘̷𝚎̷𝚜̷ 𝚗̷𝚘̷𝚝̷ 𝚎̷𝚡̷𝚒̷𝚜̷𝚝̷",
			cannotAddUser: "⚠ | 𝙱̷𝚘̷𝚝̷ 𝚒̷𝚜̷ 𝚋̷𝚕̷𝚘̷𝚌̷𝚔̷𝚎̷𝚍̷ 𝚘̷𝚛̷ 𝚝̷𝚑̷𝚒̷𝚜̷ 𝚞̷𝚜̷𝚎̷𝚛̷ 𝚋̷𝚕̷𝚘̷𝚌̷𝚔̷𝚎̷𝚍̷ 𝚜̷𝚝̷𝚛̷𝚊̷𝚗̷𝚐̷𝚎̷𝚛̷𝚜̷ 𝚏̷𝚛̷𝚘̷𝚖̷ 𝚊̷𝚍̷𝚍̷𝚒̷𝚗̷𝚐̷ 𝚝̷𝚘̷ 𝚝̷𝚑̷𝚎̷ 𝚐̷𝚛̷𝚘̷𝚞̷𝚙̷"
		}
	},
	admin: {
		description: "𝐀𝐝𝐝, 𝐫𝐞𝐦𝐨𝐯𝐞, 𝐞𝐝𝐢𝐭 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞",
		guide: "{pn} [𝚊𝚍𝚍 | -𝚊] <𝚞𝚒𝚍>: 𝙰𝚍𝚍 𝚊𝚍𝚖𝚒𝚗 𝚛𝚘𝚕𝚎 𝚏𝚘𝚛 𝚞𝚜𝚎𝚛 {pn} [𝚛𝚎𝚖𝚘𝚟𝚎 | -𝚛] <𝚞𝚒𝚍>: 𝚁𝚎𝚖𝚘𝚟𝚎 𝚊𝚍𝚖𝚒𝚗 𝚛𝚘𝚕𝚎 𝚘𝚏 𝚞𝚜𝚎𝚛 {pn} [𝚕𝚒𝚜𝚝 | -𝚕]: 𝙻𝚒𝚜𝚝 𝚊𝚕𝚕 𝚊𝚍𝚖𝚒𝚗𝚜",
		text: {
			added: "✅ | Added admin role for %1 users:\n%2",
			alreadyAdmin: "\n⚠️ | %1 users already have admin role:\n%2",
			missingIdAdd: "⚠️ | Please enter ID or tag user to add admin role",
			removed: "✅ | Removed admin role of %1 users:\n%2",
			notAdmin: "⚠️ | %1 users don't have admin role:\n%2",
			missingIdRemove: "⚠️ | Please enter ID or tag user to remove admin role",
			listAdmin: "⚠ | 𝙻𝚒𝚜𝚝 𝚘𝚏 𝚊𝚍𝚖𝚒𝚗𝚜 | ⚠\n\n%1"
		}
	},
	adminonly: {
		description: "𝐓𝐮𝐫𝐧 𝐨𝐧/𝐨𝐟𝐟 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐛𝐨𝐭",
		guide: "{pn} [𝚘𝚗 | 𝚘𝚏𝚏]",
		text: {
			turnedOn: "✅ | 𝚃𝚞𝚛𝚗𝚎𝚍 𝚘𝚗 𝚝𝚑𝚎 𝚖𝚘𝚍𝚎 𝚘𝚗𝚕𝚢 𝚊𝚍𝚖𝚒𝚗 𝚌𝚊𝚗 𝚞𝚜𝚎 𝚋𝚘𝚝",
			turnedOff: "✅ | Turned off the mode only admin can use bot",
			syntaxError: "❎ | 𝚂̷𝚢̷𝚗̷𝚝̷𝚊̷𝚡̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷, 𝚘̷𝚗̷𝚕̷𝚢̷ 𝚞̷𝚜̷𝚎̷ {pn} 𝚘̷𝚗̷ 𝚘̷𝚛̷ {pn} 𝚘̷𝚏̷𝚏̷"
		}
	},
	all: {
		description: "𝐓𝐚𝐠 𝐚𝐥𝐥 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭",
		guide: "{pn} [𝚌𝚘𝚗𝚝𝚎𝚗𝚝 | 𝚎𝚖𝚙𝚝𝚢]"
	},
	anime: {
		description: "𝐑𝐚𝐧𝐝𝐨𝐦 𝐚𝐧𝐢𝐦𝐞 𝐢𝐦𝐚𝐠𝐞",
		guide: "{pn} <𝚎𝚗𝚍𝚙𝚘𝚒𝚗𝚝>\n 𝙻𝚒𝚜𝚝 𝚘𝚏 𝚎𝚗𝚍𝚙𝚘𝚒𝚗𝚝: 𝚗𝚎𝚔𝚘, 𝚔𝚒𝚝𝚜𝚞𝚗𝚎, 𝚑𝚞𝚐, 𝚙𝚊𝚝, 𝚠𝚊𝚒𝚏𝚞, 𝚌𝚛𝚢, 𝚔𝚒𝚜𝚜, 𝚜𝚕𝚊𝚙, 𝚜𝚖𝚞𝚐, 𝚙𝚞𝚗𝚌𝚑",
		text: {
			loading: "⏳ | 𝙸𝚗𝚒𝚝𝚒𝚊𝚕𝚒𝚣𝚒𝚗𝚐 𝚒𝚖𝚊𝚐𝚎, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝...",
			error: "❎ | An error occurred, please try again later"
		}
	},
	antichangeinfobox: {
		description: "𝐓𝐮𝐫𝐧 𝐨𝐧/𝐨𝐟𝐟 𝐚𝐧𝐭𝐢 𝐜𝐡𝐚𝐧𝐠𝐞 𝐢𝐧𝐟𝐨 𝐛𝐨𝐱",
		guide: "{pn} 𝚊𝚟𝚝 [𝚘𝚗 | 𝚘𝚏𝚏]: 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚊𝚟𝚊𝚝𝚊𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝\n {pn} 𝚗𝚊𝚖𝚎 [𝚘𝚗 | 𝚘𝚏𝚏]: 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚊𝚖𝚎 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝\n {pn} 𝚝𝚑𝚎𝚖𝚎 [𝚘𝚗 | 𝚘𝚏𝚏]: 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚝𝚑𝚎𝚖𝚎 (𝚌𝚑ủ đề) 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝\n {pn} 𝚎𝚖𝚘𝚓𝚒 [𝚘𝚗 | 𝚘𝚏𝚏]: 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚎𝚖𝚘𝚓𝚒 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
		text: {
			antiChangeAvatarOn: "✅ | 𝚃𝚞𝚛𝚗 𝚘𝚗 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚊𝚟𝚊𝚝𝚊𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
			antiChangeAvatarOff: "✅ | 𝚃𝚞𝚛𝚗 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚊𝚟𝚊𝚝𝚊𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
			missingAvt: "⚠ | 𝚈̷𝚘̷𝚞̷ 𝚑̷𝚊̷𝚟̷𝚎̷ 𝚗̷𝚘̷𝚝̷ 𝚜̷𝚎̷𝚝̷ 𝚊̷𝚟̷𝚊̷𝚝̷𝚊̷𝚛̷ 𝚏̷𝚘̷𝚛̷ 𝚋̷𝚘̷𝚡̷ 𝚌̷𝚑̷𝚊̷𝚝̷",
			antiChangeNameOn: "✅ | 𝚃𝚞𝚛𝚗 𝚘𝚗 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚊𝚖𝚎 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
			antiChangeNameOff: "✅ | 𝚃𝚞𝚛𝚗 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚊𝚖𝚎 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
			antiChangeThemeOn: "✅ | 𝚃𝚞𝚛𝚗 𝚘𝚗 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚝𝚑𝚎𝚖𝚎 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
			antiChangeThemeOff: "✅ | 𝚃𝚞𝚛𝚗 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚝𝚑𝚎𝚖𝚎 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
			antiChangeEmojiOn: "✅ | 𝚃𝚞𝚛𝚗 𝚘𝚗 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚎𝚖𝚘𝚓𝚒 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
			antiChangeEmojiOff: "✅ | 𝚃𝚞𝚛𝚗 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚎𝚖𝚘𝚓𝚒 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝",
			antiChangeAvatarAlreadyOn: "✅ | 𝚈𝚘𝚞𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝 𝚒𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 𝚘𝚗 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚊𝚟𝚊𝚝𝚊𝚛",
			antiChangeNameAlreadyOn: "✅ | 𝚈𝚘𝚞𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝 𝚒𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 𝚘𝚗 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚊𝚖𝚎",
			antiChangeThemeAlreadyOn: "✅ | 𝚈𝚘𝚞𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝 𝚒𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 𝚘𝚗 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚝𝚑𝚎𝚖𝚎",
			antiChangeEmojiAlreadyOn: "✅ | 𝚈𝚘𝚞𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝 𝚒𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 𝚘𝚗 𝚊𝚗𝚝𝚒 𝚌𝚑𝚊𝚗𝚐𝚎 𝚎𝚖𝚘𝚓𝚒"
		}
	},
	appstore: {
		description: "𝐒𝐞𝐚𝐫𝐜𝐡 𝐚𝐩𝐤𝐬 𝐨𝐧 𝐚𝐩𝐩𝐬𝐭𝐨𝐫𝐞",
		text: {
			missingKeyword: "⚠ | 𝚈̷𝚘̷𝚞̷ 𝚑̷𝚊̷𝚟̷𝚎̷𝚗̷'𝚝̷ 𝚎̷𝚗̷𝚝̷𝚎̷𝚛̷𝚎̷𝚍̷ 𝚊̷𝚗̷𝚢̷ 𝚔̷𝚎̷𝚢̷𝚠̷𝚘̷𝚛̷𝚍̷",
			noResult: "❎ | 𝙽̷𝚘̷ 𝚛̷𝚎̷𝚜̷𝚞̷𝚕̷𝚝̷ 𝚏̷𝚘̷𝚞̷𝚗̷𝚍̷ 𝚏̷𝚘̷𝚛̷ 𝚔̷𝚎̷𝚢̷𝚠̷𝚘̷𝚛̷𝚍̷ %1"
		}
	},
	autosetname: {
		description: "𝐀𝐮𝐭𝐨 𝐜𝐡𝐚𝐧𝐠𝐞 𝐧𝐢𝐜𝐤𝐧𝐚𝐦𝐞 𝐨𝐟 𝐧𝐞𝐰 𝐦𝐞𝐦𝐛𝐞𝐫",
		guide: "   {pn} 𝚜𝚎𝚝 <𝚗𝚒𝚌𝚔𝚗𝚊𝚖𝚎>: 𝚞𝚜𝚎 𝚝𝚘 𝚜𝚎𝚝 𝚌𝚘𝚗𝚏𝚒𝚐 𝚝𝚘 𝚊𝚞𝚝𝚘 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚒𝚌𝚔𝚗𝚊𝚖𝚎, 𝚠𝚒𝚝𝚑 𝚜𝚘𝚖𝚎 𝚜𝚑𝚘𝚛𝚝𝚌𝚞𝚝𝚜:\n + {𝚞𝚜𝚎𝚛𝙽𝚊𝚖𝚎}: 𝚗𝚊𝚖𝚎 𝚘𝚏 𝚗𝚎𝚠 𝚖𝚎𝚖𝚋𝚎𝚛\n + {𝚞𝚜𝚎𝚛𝙸𝙳}: 𝚖𝚎𝚖𝚋𝚎𝚛 𝚒𝚍\n 𝙴𝚡𝚊𝚖𝚙𝚕𝚎:\n {pn} 𝚜𝚎𝚝 {𝚞𝚜𝚎𝚛𝙽𝚊𝚖𝚎} 🚀\n\n {pn} [𝚘𝚗 | 𝚘𝚏𝚏]: 𝚞𝚜𝚎 𝚝𝚘 𝚝𝚞𝚛𝚗 𝚘𝚗/𝚘𝚏𝚏 𝚝𝚑𝚒𝚜 𝚏𝚎𝚊𝚝𝚞𝚛𝚎\n\n {pn} [𝚟𝚒𝚎𝚠 | 𝚒𝚗𝚏𝚘]: 𝚜𝚑𝚘𝚠 𝚌𝚞𝚛𝚛𝚎𝚗𝚝 𝚌𝚘𝚗𝚏𝚒𝚐",
		text: {
			missingConfig: "⚠ | 𝙿̷𝚕̷𝚎̷𝚊̷𝚜̷𝚎̷ 𝚎̷𝚗̷𝚝̷𝚎̷𝚛̷ 𝚝̷𝚑̷𝚎̷ 𝚛̷𝚎̷𝚚̷𝚞̷𝚒̷𝚛̷𝚎̷𝚍̷ 𝚌̷𝚘̷𝚗̷𝚏̷𝚒̷𝚐̷𝚞̷𝚛̷𝚊̷𝚝̷𝚒̷𝚘̷𝚗̷",
			configSuccess: "✅ | 𝚃𝚑𝚎 𝚌𝚘𝚗𝚏𝚒𝚐𝚞𝚛𝚊𝚝𝚒𝚘𝚗 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚜𝚎𝚝 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢",
			currentConfig: "⚠ | 𝐓𝐡𝐞 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 𝐚𝐮𝐭𝐨𝐒𝐞𝐭𝐍𝐚𝐦𝐞 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐜𝐡𝐚𝐭 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬:\n%1",
			notSetConfig: "❎ | 𝚈̷𝚘̷𝚞̷𝚛̷ 𝚐̷𝚛̷𝚘̷𝚞̷𝚙̷ 𝚑̷𝚊̷𝚜̷ 𝚗̷𝚘̷𝚝̷ 𝚜̷𝚎̷𝚝̷ 𝚝̷𝚑̷𝚎̷ 𝚊̷𝚞̷𝚝̷𝚘̷𝚂̷𝚎̷𝚝̷𝙽̷𝚊̷𝚖̷𝚎̷ 𝚌̷𝚘̷𝚗̷𝚏̷𝚒̷𝚐̷𝚞̷𝚛̷𝚊̷𝚝̷𝚒̷𝚘̷𝚗̷",
			syntaxError: "❎ | 𝚂̷𝚢̷𝚗̷𝚝̷𝚊̷𝚡̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷, 𝚘̷𝚗̷𝚕̷𝚢̷ \"{𝚙̷𝚗̷} 𝚘̷𝚗̷\" 𝚘̷𝚛̷ \"{𝚙̷𝚗̷} 𝚘̷𝚏̷𝚏̷\" 𝚌̷𝚊̷𝚗̷ 𝚋̷𝚎̷ 𝚞̷𝚜̷𝚎̷𝚍̷",
			turnOnSuccess: "✅ | 𝚃𝚑𝚎 𝚊𝚞𝚝𝚘𝚂𝚎𝚝𝙽𝚊𝚖𝚎 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚗",
			turnOffSuccess: "✅ | 𝚃𝚑𝚎 𝚊𝚞𝚝𝚘𝚂𝚎𝚝𝙽𝚊𝚖𝚎 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚏𝚏",
			error: "❎ | 𝙰̷𝚗̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷ 𝚘̷𝚌̷𝚌̷𝚞̷𝚛̷𝚛̷𝚎̷𝚍̷ 𝚠̷𝚑̷𝚒̷𝚕̷𝚎̷ 𝚞̷𝚜̷𝚒̷𝚗̷𝚐̷ 𝚝̷𝚑̷𝚎̷ 𝚊̷𝚞̷𝚝̷𝚘̷𝚂̷𝚎̷𝚝̷𝙽̷𝚊̷𝚖̷𝚎̷ 𝚏̷𝚎̷𝚊̷𝚝̷𝚞̷𝚛̷𝚎̷, 𝚝̷𝚛̷𝚢̷ 𝚝̷𝚞̷𝚛̷𝚗̷𝚒̷𝚗̷𝚐̷ 𝚘̷𝚏̷𝚏̷ 𝚝̷𝚑̷𝚎̷ 𝚒̷𝚗̷𝚟̷𝚒̷𝚝̷𝚎̷ 𝚕̷𝚒̷𝚗̷𝚔̷ 𝚏̷𝚎̷𝚊̷𝚝̷𝚞̷𝚛̷𝚎̷ 𝚒̷𝚗̷ 𝚝̷𝚑̷𝚎̷ 𝚐̷𝚛̷𝚘̷𝚞̷𝚙̷ 𝚊̷𝚗̷𝚍̷ 𝚝̷𝚛̷𝚢̷ 𝚊̷𝚐̷𝚊̷𝚒̷𝚗̷ 𝚕̷𝚊̷𝚝̷𝚎̷𝚛̷"
		}
	},
	avatar: {
		description: "create anime avatar with signature",
		guide: "{p}{n} <character id or character name> | <background text> | <signature> | <background color name or hex color>\n{p}{n} help: view how to use this command",
		text: {
			initImage: "Initializing image, please wait...",
			invalidCharacter: "Currently there are only %1 characters on the system, please enter a character id less than",
			notFoundCharacter: "No character named %1 was found in the character list",
			errorGetCharacter: "An error occurred while getting character data:\n%1: %2",
			success: "✅ Your avatar\nCharacter: %1\nID: %2\nBackground text: %3\nSignature: %4\nColor: %5",
			defaultColor: "default",
			error: "An error occurred\n%1: %2"
		}
	},
	badwords: {
		description: "Turn on/off/add/remove bad words warning, if a member violates, he will be warned, the second time he will be kicked out of the chat box",
		guide: "   {pn} add <words>: add banned words (you can add multiple words separated by commas \",\" or vertical bars \"|\")\n   {pn} delete <words>: delete banned words (you can delete multiple words separated by commas \",\" or vertical bars \"|\")\n   {pn} list <hide | leave blank>: turn off warning (add \"hide\" to hide banned words)\n   {pn} unwarn [<userID> | <@tag>]: remove 1 warning of 1 member\n   {pn} on: turn off warning\n   {pn} off: turn on warning",
		text: {
			onText: "on",
			offText: "off",
			onlyAdmin: "⚠️ | Only admins can add banned words to the list",
			missingWords: "⚠️ | You haven't entered the banned words",
			addedSuccess: "✅ | Added %1 banned words to the list",
			alreadyExist: "❌ | %1 banned words already exist in the list before: %2",
			tooShort: "⚠️ | %1 banned words cannot be added to the list because they are shorter than 2 characters: %2",
			onlyAdmin2: "⚠️ | Only admins can delete banned words from the list",
			missingWords2: "⚠️ | You haven't entered the words to delete",
			deletedSuccess: "✅ | Deleted %1 banned words from the list",
			notExist: "❌ | %1 banned words do not exist in the list before: %2",
			emptyList: "⚠️ | The list of banned words in your group is currently empty",
			badWordsList: "📑 | The list of banned words in your group: %1",
			onlyAdmin3: "⚠️ | Only admins can %1 this feature",
			turnedOnOrOff: "✅ | Banned words warning has been %1",
			onlyAdmin4: "⚠️ | Only admins can delete banned words warning",
			missingTarget: "⚠️ | You haven't entered user ID or tagged user",
			notWarned: "⚠️ | User %1 has not been warned for banned words",
			removedWarn: "✅ | User %1 | %2 has been removed 1 banned words warning",
			warned: "⚠️ | Banned words \"%1\" have been detected in your message, if you continue to violate you will be kicked from the group.",
			warned2: "⚠️ | Banned words \"%1\" have been detected in your message, you have violated 2 times and will be kicked from the group.",
			needAdmin: "Bot needs admin privileges to kick banned members",
			unwarned: "✅ | Removed banned words warning of user %1 | %2"
		}
	},
	balance: {
		description: "𝐕𝐢𝐞𝐰 𝐲𝐨𝐮𝐫 𝐦𝐨𝐧𝐞𝐲 𝐨𝐫 𝐭𝐡𝐞 𝐦𝐨𝐧𝐞𝐲 𝐨𝐟 𝐭𝐡𝐞 𝐭𝐚𝐠𝐠𝐞𝐝 𝐩𝐞𝐫𝐬𝐨𝐧",
		guide: "{pn}: 𝚟𝚒𝚎𝚠 𝚢𝚘𝚞𝚛 𝚖𝚘𝚗𝚎𝚢\n {pn} <@𝚝𝚊𝚐>: 𝚟𝚒𝚎𝚠 𝚝𝚑𝚎 𝚖𝚘𝚗𝚎𝚢 𝚘𝚏 𝚝𝚑𝚎 𝚝𝚊𝚐𝚐𝚎𝚍 𝚙𝚎𝚛𝚜𝚘𝚗",
		text: {
			money: "𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 %1$",
			moneyOf: "%1 𝐡𝐚𝐬 %2$"
		}
	},
	batslap: {
		description: "𝐁𝐚𝐭𝐬𝐥𝐚𝐩 𝐢𝐦𝐚𝐠𝐞",
		text: {
			noTag: "⚠ | 𝐘𝐨𝐮 𝐦𝐮𝐬𝐭 𝐭𝐚𝐠 𝐭𝐡𝐞 𝐩𝐞𝐫𝐬𝐨𝐧 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐥𝐚𝐩"
		}
	},
	busy: {
		description: "𝐓𝐮𝐫𝐧 𝐨𝐧 𝐝𝐨 𝐧𝐨𝐭 𝐝𝐢𝐬𝐭𝐮𝐫𝐛 𝐦𝐨𝐝𝐞, 𝐰𝐡𝐞𝐧 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐭𝐚𝐠𝐠𝐞𝐝 𝐛𝐨𝐭 𝐰𝐢𝐥𝐥 𝐧𝐨𝐭𝐢𝐟𝐲",
		guide: "{pn} [𝚎𝚖𝚙𝚝𝚢 | <𝚛𝚎𝚊𝚜𝚘𝚗>]: 𝚝𝚞𝚛𝚗 𝚘𝚗 𝚍𝚘 𝚗𝚘𝚝 𝚍𝚒𝚜𝚝𝚞𝚛𝚋 𝚖𝚘𝚍𝚎\n {pn} 𝚘𝚏𝚏: 𝚝𝚞𝚛𝚗 𝚘𝚏𝚏 𝚍𝚘 𝚗𝚘𝚝 𝚍𝚒𝚜𝚝𝚞𝚛𝚋 𝚖𝚘𝚍𝚎",
		text: {
			turnedOff: "✅ | 𝙳𝚘 𝚗𝚘𝚝 𝚍𝚒𝚜𝚝𝚞𝚛𝚋 𝚖𝚘𝚍𝚎 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚏𝚏",
			turnedOn: "✅ | 𝙳𝚘 𝚗𝚘𝚝 𝚍𝚒𝚜𝚝𝚞𝚛𝚋 𝚖𝚘𝚍𝚎 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚗",
			turnedOnWithReason: "✅ | 𝙳𝚘 𝚗𝚘𝚝 𝚍𝚒𝚜𝚝𝚞𝚛𝚋 𝚖𝚘𝚍𝚎 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚗 𝚠𝚒𝚝𝚑 𝚛𝚎𝚊𝚜𝚘𝚗: %1",
			alreadyOn: "⚠ | 𝚄̷𝚜̷𝚎̷𝚛̷ %1 𝚒̷𝚜̷ 𝚌̷𝚞̷𝚛̷𝚛̷𝚎̷𝚗̷𝚝̷𝚕̷𝚢̷ 𝚋̷𝚞̷𝚜̷𝚢̷",
			alreadyOnWithReason: "⚠ | 𝐔𝐬𝐞𝐫 %1 𝐢𝐬 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐛𝐮𝐬𝐲 𝐰𝐢𝐭𝐡 𝐫𝐞𝐚𝐬𝐨𝐧: %2"
		}
	},
	callad: {
		description: "send report, feedback, bug,... to admin bot",
		guide: "   {pn} <message>",
		text: {
			missingMessage: "Please enter the message you want to send to admin",
			sendByGroup: "\n- Sent from group: %1\n- Thread ID: %2",
			sendByUser: "\n- Sent from user",
			content: "\n\nContent:\n─────────────────\n%1\n─────────────────\nReply this message to send message to user",
			success: "Sent your message to admin successfully!",
			reply: "📍 Reply from admin %1:\n─────────────────\n%2\n─────────────────\nReply this message to continue send message to admin",
			replySuccess: "Sent your reply to admin successfully!",
			feedback: "📝 Feedback from user %1:\n- User ID: %2%3\n\nContent:\n─────────────────\n%4\n─────────────────\nReply this message to send message to user",
			replyUserSuccess: "Sent your reply to user successfully!"
		}
	},
	cmd: {
		description: "𝐌𝐚𝐧𝐚𝐠𝐞 𝐲𝐨𝐮𝐫 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞𝐬",
		guide: "{pn} 𝚕𝚘𝚊𝚍 <𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚒𝚕𝚎 𝚗𝚊𝚖𝚎>\n{pn} 𝚕𝚘𝚊𝚍𝙰𝚕𝚕\n{pn} 𝚒𝚗𝚜𝚝𝚊𝚕𝚕 <𝚞𝚛𝚕> <𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚒𝚕𝚎 𝚗𝚊𝚖𝚎>: 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚊𝚗𝚍 𝚒𝚗𝚜𝚝𝚊𝚕𝚕 𝚊 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚒𝚕𝚎 𝚏𝚛𝚘𝚖 𝚊 𝚞𝚛𝚕, 𝚞𝚛𝚕 𝚒𝚜 𝚝𝚑𝚎 𝚙𝚊𝚝𝚑 𝚝𝚘 𝚝𝚑𝚎 𝚏𝚒𝚕𝚎 (𝚛𝚊𝚠)",
		text: {
			missingFileName: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐧𝐚𝐦𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐫𝐞𝐥𝐨𝐚𝐝",
			loaded: "✅ | 𝙻𝚘𝚊𝚍𝚎𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 \"%1\" 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢",
			loadedError: "❌ | 𝙵̷𝚊̷𝚒̷𝚕̷𝚎̷𝚍̷ 𝚝̷𝚘̷ 𝚕̷𝚘̷𝚊̷𝚍̷ 𝚌̷𝚘̷𝚖̷𝚖̷𝚊̷𝚗̷𝚍̷ \"%1\" 𝚠̷𝚒̷𝚝̷𝚑̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷\n%2: %𝟹̷",
			loadedSuccess: "✅ | 𝐋𝐨𝐚𝐝𝐞𝐝 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 \"%1\" 𝐜𝐨𝐦𝐦𝐚𝐧𝐝",
			loadedFail: "❌ | 𝙵̷𝚊̷𝚒̷𝚕̷𝚎̷𝚍̷ 𝚝̷𝚘̷ 𝚕̷𝚘̷𝚊̷𝚍̷ \"%1\" 𝚌̷𝚘̷𝚖̷𝚖̷𝚊̷𝚗̷𝚍̷\n%2",
			missingCommandNameUnload: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐧𝐚𝐦𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐮𝐧𝐥𝐨𝐚𝐝",
			unloaded: "✅ | 𝚄𝚗𝚕𝚘𝚊𝚍𝚎𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 \"%1\" 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢",
			unloadedError: "❌ | 𝙵̷𝚊̷𝚒̷𝚕̷𝚎̷𝚍̷ 𝚝̷𝚘̷ 𝚞̷𝚗̷𝚕̷𝚘̷𝚊̷𝚍̷ 𝚌̷𝚘̷𝚖̷𝚖̷𝚊̷𝚗̷𝚍̷ \"%1\" 𝚠̷𝚒̷𝚝̷𝚑̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐮𝐫𝐥 𝐨𝐫 𝐜𝐨𝐝𝐞 𝐚𝐧𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞 𝐧𝐚𝐦𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐢𝐧𝐬𝐭𝐚𝐥𝐥",
			missingUrlOrCode: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐮𝐫𝐥 𝐨𝐫 𝐜𝐨𝐝𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐢𝐧𝐬𝐭𝐚𝐥𝐥",
			missingFileNameInstall: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐟𝐢𝐥𝐞 𝐧𝐚𝐦𝐞 𝐭𝐨 𝐬𝐚𝐯𝐞 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 (𝐰𝐢𝐭𝐡 .𝐣𝐬 𝐞𝐱𝐭𝐞𝐧𝐬𝐢𝐨𝐧)",
			invalidUrlOrCode: "⚠️ | 𝐔𝐧𝐚𝐛𝐥𝐞 𝐭𝐨 𝐠𝐞𝐭 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐜𝐨𝐝𝐞",
			alreadExist: "⚠️ | 𝐓𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐞𝐱𝐢𝐬𝐭𝐬, 𝐚𝐫𝐞 𝐲𝐨𝐮 𝐬𝐮𝐫𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐨𝐯𝐞𝐫𝐰𝐫𝐢𝐭𝐞 𝐭𝐡𝐞 𝐨𝐥𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞?\n𝐑𝐞𝐚𝐜𝐭 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐞",
			installed: "✅ | 𝙸𝚗𝚜𝚝𝚊𝚕𝚕𝚎𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 \"%1\" 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢, 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚒𝚕𝚎 𝚒𝚜 𝚜𝚊𝚟𝚎𝚍 𝚊𝚝 %2",
			installedError: "❌ | 𝙵̷𝚊̷𝚒̷𝚕̷𝚎̷𝚍̷ 𝚝̷𝚘̷ 𝚒̷𝚗̷𝚜̷𝚝̷𝚊̷𝚕̷𝚕̷ 𝚌̷𝚘̷𝚖̷𝚖̷𝚊̷𝚗̷𝚍̷ \"%1\" 𝚠̷𝚒̷𝚝̷𝚑̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷\n%2: %3",
			missingFile: "⚠️ | 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞 \"%1\" 𝐧𝐨𝐭 𝐟𝐨𝐮𝐧𝐝",
			invalidFileName: "⚠️ | 𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞 𝐧𝐚𝐦𝐞",
			unloadedFile: "✅ | 𝚄𝚗𝚕𝚘𝚊𝚍𝚎𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 \"%1\""
		}
	},
	count: {
		description: "𝐕𝐢𝐞𝐰 𝐭𝐡𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐨𝐟 𝐚𝐥𝐥 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐨𝐫 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟 (𝐬𝐢𝐧𝐜𝐞 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐣𝐨𝐢𝐧𝐞𝐝 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩)",
		guide: "{pn}: 𝚞𝚜𝚎𝚍 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚝𝚑𝚎 𝚗𝚞𝚖𝚋𝚎𝚛 𝚘𝚏 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚘𝚏 𝚢𝚘𝚞\n {pn} @𝚝𝚊𝚐: 𝚞𝚜𝚎𝚍 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚝𝚑𝚎 𝚗𝚞𝚖𝚋𝚎𝚛 𝚘𝚏 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚘𝚏 𝚝𝚑𝚘𝚜𝚎 𝚝𝚊𝚐𝚐𝚎𝚍\n {pn} 𝚊𝚕𝚕: 𝚞𝚜𝚎𝚍 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚝𝚑𝚎 𝚗𝚞𝚖𝚋𝚎𝚛 𝚘𝚏 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚘𝚏 𝚊𝚕𝚕 𝚖𝚎𝚖𝚋𝚎𝚛𝚜",
		text: {
			count: "⚠ | 𝐍𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐨𝐟 𝐦𝐞𝐦𝐛𝐞𝐫𝐬:",
			endMessage: "⚠ | 𝚃̷𝚑̷𝚘̷𝚜̷𝚎̷ 𝚠̷𝚑̷𝚘̷ 𝚍̷𝚘̷ 𝚗̷𝚘̷𝚝̷ 𝚑̷𝚊̷𝚟̷𝚎̷ 𝚊̷ 𝚗̷𝚊̷𝚖̷𝚎̷ 𝚒̷𝚗̷ 𝚝̷𝚑̷𝚎̷ 𝚕̷𝚒̷𝚜̷𝚝̷ 𝚑̷𝚊̷𝚟̷𝚎̷ 𝚗̷𝚘̷𝚝̷ 𝚜̷𝚎̷𝚗̷𝚝̷ 𝚊̷𝚗̷𝚢̷ 𝚖̷𝚎̷𝚜̷𝚜̷𝚊̷𝚐̷𝚎̷𝚜̷.",
			page: "🕊 | 𝙿𝚊𝚐𝚎 [%1/%2]",
			reply: "⚠ | 𝐑𝐞𝐩𝐥𝐲 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐩𝐚𝐠𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐭𝐨 𝐯𝐢𝐞𝐰 𝐦𝐨𝐫𝐞",
			result: "%1 𝚛𝚊𝚗𝚔 %2 𝚠𝚒𝚝𝚑 %3 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜",
			yourResult: "✅ | 𝚈𝚘𝚞 𝚊𝚛𝚎 𝚛𝚊𝚗𝚔𝚎𝚍 %1 𝚊𝚗𝚍 𝚑𝚊𝚟𝚎 𝚜𝚎𝚗𝚝 %2 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚒𝚗 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙",
			invalidPage: "❎ | 𝙸̷𝚗̷𝚟̷𝚊̷𝚕̷𝚒̷𝚍̷ 𝚙̷𝚊̷𝚐̷𝚎̷ 𝚗̷𝚞̷𝚖̷𝚋̷𝚎̷𝚛̷"
		}
	},
	customrankcard: {
		description: "Design rank card by your own",
		guide: {
			body: "   {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcolor | levelcolor | reset] <value>"
				+ "\n   In which: "
				+ "\n  + maincolor | background <value>: main background of rank card"
				+ "\n  + subcolor <value>: sub background"
				+ "\n  + linecolor <value>: color of line between main and sub background"
				+ "\n  + expbarcolor <value>: color of exp bar"
				+ "\n  + progresscolor <value>: color of current exp bar"
				+ "\n  + alphasubcolor <value>: opacity of sub background (from 0 -> 1)"
				+ "\n  + textcolor <value>: color of text (hex color or rgba)"
				+ "\n  + namecolor <value>: color of name"
				+ "\n  + expcolor <value>: color of exp"
				+ "\n  + rankcolor <value>: color of rank"
				+ "\n  + levelcolor <value>: color of level"
				+ "\n    • <value> can be hex color, rgb, rgba, gradient (each color is separated by space) or image url"
				+ "\n    • If you want to use gradient, please enter many colors separated by space"
				+ "\n   {pn} reset: reset all to default"
				+ "\n   Example:"
				+ "\n    {pn} maincolor #fff000"
				+ "\n    {pn} subcolor rgba(255,136,86,0.4)"
				+ "\n    {pn} reset",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg`]: "https://i.ibb.co/BZ2Qgs1/image.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png`]: "https://i.ibb.co/wy1ZHHL/image.png"
			}
		},
		text: {
			invalidImage: "Invalid image url, please choose an url with image destination (jpg, jpeg, png, gif), you can upload image to https://imgbb.com/ and choose \"get direct link\" to get image url",
			invalidAttachment: "Invalid attachment, please choose an image file",
			invalidColor: "Invalid color code, please choose a hex color code (6 digits) or rgba color code",
			notSupportImage: "Url image is not supported with option \"%1\"",
			success: "Your changes have been saved, here is a preview",
			reseted: "All settings have been reset to default",
			invalidAlpha: "Please choose a number from 0 -> 1"
		}
	},
	dhbc: {
		description: "play game catch the word",
		guide: "{pn}",
		text: {
			reply: "Please reply this message with the answer\n%1",
			isSong: "This is the name of the song of the singer %1",
			notPlayer: "⚠️ You are not the player of this question",
			correct: "🎉 Congratulations you have answered correctly and received %1$",
			wrong: "⚠️ You have answered incorrectly"
		}
	},
	emojimix: {
		description: "𝐌𝐢𝐱 𝟐 𝐞𝐦𝐨𝐣𝐢 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫",
		guide: "{pn} <𝚎𝚖𝚘𝚓𝚒𝟷> <𝚎𝚖𝚘𝚓𝚒𝟸>\n 𝙴𝚡𝚊𝚖𝚙𝚕𝚎: {pn} 🤣 🥰"
	},
	eval: {
		description: "𝐓𝐞𝐬𝐭 𝐜𝐨𝐝𝐞 𝐪𝐮𝐢𝐜𝐤𝐥𝐲",
		guide: "{pn} <𝚌𝚘𝚍𝚎 𝚝𝚘 𝚝𝚎𝚜𝚝>",
		text: {
			error: "❌ | 𝙰̷𝚗̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷ 𝚘̷𝚌̷𝚌̷𝚞̷𝚛̷𝚛̷𝚎̷𝚍̷:"
		}
	},
	event: {
		description: "Manage your event command files",
		guide: "{pn} load <command file name>\n{pn} loadAll\n{pn} install <url> <command file name>: Download and load event command, url is the path to the command file (raw)",
		text: {
			missingFileName: "⚠️ | Please enter the command name you want to reload",
			loaded: "✅ | Loaded event command \"%1\" successfully",
			loadedError: "❌ | Loaded event command \"%1\" failed with error\n%2: %3",
			loadedSuccess: "✅ | Loaded \"%1\" event command successfully",
			loadedFail: "❌ | Loaded event command \"%1\" failed\n%2",
			missingCommandNameUnload: "⚠️ | Please enter the command name you want to unload",
			unloaded: "✅ | Unloaded event command \"%1\" successfully",
			unloadedError: "❌ | Unloaded event command \"%1\" failed with error\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | Please enter the url or code and command file name you want to install",
			missingUrlOrCode: "⚠️ | Please enter the url or code of the command file you want to install",
			missingFileNameInstall: "⚠️ | Please enter the file name to save the command (with .js extension)",
			invalidUrlOrCode: "⚠️ | Unable to get command code",
			alreadExist: "⚠️ | The command file already exists, are you sure you want to overwrite the old command file?\nReact to this message to continue",
			installed: "✅ | Installed event command \"%1\" successfully, the command file is saved at %2",
			installedError: "❌ | Installed event command \"%1\" failed with error\n%2: %3",
			missingFile: "⚠️ | File \"%1\" not found",
			invalidFileName: "⚠️ | Invalid file name",
			unloadedFile: "✅ | Unloaded command \"%1\""
		}
	},
	filteruser: {
		description: "filter group members by number of messages or locked account",
		guide: "   {pn} [<number of messages> | die]",
		text: {
			needAdmin: "⚠️ | Please add the bot as a group admin to use this command",
			confirm: "⚠️ | Are you sure you want to delete group members with less than %1 messages?\nReact to this message to confirm",
			kickByBlock: "✅ | Successfully deleted %1 members who are locked acc",
			kickByMsg: "✅ | Successfully deleted %1 members with less than %2 messages",
			kickError: "❌ | An error occurred and could not kick %1 members:\n%2",
			noBlock: "✅ | There are no members who are locked acc",
			noMsg: "✅ | There are no members with less than %1 messages"
		}
	},
	getfbstate: {
		description: "𝐆𝐞𝐭 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 𝐟𝐛𝐬𝐭𝐚𝐭𝐞",
		guide: "{pn}",
		text: {
			success: "⚠ | 𝐒𝐞𝐧𝐭 𝐟𝐛𝐬𝐭𝐚𝐭𝐞 𝐭𝐨 𝐲𝐨𝐮, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐛𝐨𝐭'𝐬 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞"
		}
	},
	grouptag: {
		description: "Tag members by group",
		guide: "   {pn} add <groupTagName> <@tags>: use to add new group tag or add members to group tag\n   Example:\n    {pn} TEAM1 @tag1 @tag2\n\n   {pn} del <groupTagName> <@tags>: use to remove members from group tag\n   Example:\n    {pn} del TEAM1 @tag1 @tag2\n\n   {pn} remove <groupTagName>: use to remove group tag\n   Example:\n    {pn} remove TEAM1\n\n   {pn} rename <groupTagName> | <newGroupTagName>: use to rename group tag\n\n   {pn} [list | all]: use to view list of group tag in your group chat\n\n   {pn} info <groupTagName>: use to view info of group tag",
		text: {
			noGroupTagName: "Please enter group tag name",
			noMention: "You haven't tagged any member to add to group tag",
			addedSuccess: "Added members:\n%1\nto group tag \"%2\"",
			addedSuccess2: "Added group tag \"%1\" with members:\n%2",
			existedInGroupTag: "Members:\n%1\nalready existed in group tag \"%2\"",
			notExistedInGroupTag: "Members:\n%1\ndoesn't exist in group tag \"%2\"",
			noExistedGroupTag: "Group tag \"%1\" doesn't exist in your group chat",
			noExistedGroupTag2: "Your group chat hasn't added any group tag",
			noMentionDel: "Please tag members to remove from group tag \"%1\"",
			deletedSuccess: "Deleted members:\n%1\nfrom group tag \"%2\"",
			deletedSuccess2: "Deleted group tag \"%1\"",
			tagged: "Tag group \"%1\":\n%2",
			noGroupTagName2: "Please enter old group tag name and new group tag name, separated by \"|\"",
			renamedSuccess: "Renamed group tag \"%1\" to \"%2\"",
			infoGroupTag: "📑 | Group name: \"%1\"\n👥 | Number of members: %2\n👨‍👩‍👧‍👦 | List of members:\n %3"
		}
	},
	help: {
		description: "𝐕𝐢𝐞𝐰 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐮𝐬𝐚𝐠𝐞",
		guide: "{pn} [𝚎𝚖𝚙𝚝𝚢 | <𝚙𝚊𝚐𝚎 𝚗𝚞𝚖𝚋𝚎𝚛> | <𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚗𝚊𝚖𝚎>]",
		text: {
			help: "╭─────────────⭓\n%1\n├─────⭔\n│ 𝐏𝐚𝐠𝐞 [ %2/%3 ]\n│ 𝙲𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢, 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚑𝚊𝚜 %4 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚝𝚑𝚊𝚝 𝚌𝚊𝚗 𝚋𝚎 𝚞𝚜𝚎𝚍\n│ » 𝚃𝚢𝚙𝚎 %5𝚑𝚎𝚕𝚙 <𝚙𝚊𝚐𝚎> 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚕𝚒𝚜𝚝\n│ » 𝚃𝚢𝚙𝚎 %5𝚑𝚎𝚕𝚙 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚝𝚑𝚎 𝚍𝚎𝚝𝚊𝚒𝚕𝚜 𝚘𝚏 𝚑𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎 𝚝𝚑𝚊𝚝 𝚌𝚘𝚖𝚖𝚊𝚗𝚍\n├────────⭔\n│ %6\n╰─────────────⭓",
			help2: "%1├───────⭔\n│ » 𝙲𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢, 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚑𝚊𝚜 %2 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚝𝚑𝚊𝚝 𝚌𝚊𝚗 𝚋𝚎 𝚞𝚜𝚎𝚍\n│ » 𝚃𝚢𝚙𝚎 %3𝚑𝚎𝚕𝚙 <𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚗𝚊𝚖𝚎> 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚝𝚑𝚎 𝚍𝚎𝚝𝚊𝚒𝚕𝚜 𝚘𝚏 𝚑𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎 𝚝𝚑𝚊𝚝 𝚌𝚘𝚖𝚖𝚊𝚗𝚍\n│ %4\n╰─────────────⭓",
			commandNotFound: "𝙲̷𝚘̷𝚖̷𝚖̷𝚊̷𝚗̷𝚍̷ \"%1\" 𝚍̷𝚘̷𝚎̷𝚜̷ 𝚗̷𝚘̷𝚝̷ 𝚎̷𝚡̷𝚒̷𝚜̷𝚝̷",
			getInfoCommand: "╭── 𝐍𝐀𝐌𝐄 ────⭓\n│ %1\n├── 𝐈𝐍𝐅𝐎\n│ 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: %2\n│ 𝙾𝚝𝚑𝚎𝚛 𝚗𝚊𝚖𝚎𝚜: %3\n│ 𝙾𝚝𝚑𝚎𝚛 𝚗𝚊𝚖𝚎𝚜 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚐𝚛𝚘𝚞𝚙: %4\n│ 𝚅𝚎𝚛𝚜𝚒𝚘𝚗: %5\n│ 𝚁𝚘𝚕𝚎: %6\n│ 𝚃𝚒𝚖𝚎 𝚙𝚎𝚛 𝚌𝚘𝚖𝚖𝚊𝚗𝚍: %7s\n│ 𝙰𝚞𝚝𝚑𝚘𝚛: %8\n├── 𝚄𝚜𝚊𝚐𝚎\n%9\n╰──────⭔",
			doNotHave: "⚠ | 𝙳̷𝚘̷ 𝚗̷𝚘̷𝚝̷ 𝚑̷𝚊̷𝚟̷𝚎̷",
			roleText0: "0 (𝙰𝚕𝚕 𝚞𝚜𝚎𝚛𝚜)",
			roleText1: "1 (𝙶𝚛𝚘𝚞𝚙 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚝𝚘𝚛𝚜)",
			roleText2: "2 (𝙰𝚍𝚖𝚒𝚗 𝚋𝚘𝚝)",
			roleText0setRole: "0 (𝐬𝐞𝐭 𝐫𝐨𝐥𝐞, 𝐚𝐥𝐥 𝐮𝐬𝐞𝐫𝐬)",
			roleText1setRole: "1 (𝐬𝐞𝐭 𝐫𝐨𝐥𝐞, 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐨𝐫𝐬)",
			pageNotFound: "𝙿̷𝚊̷𝚐̷𝚎̷ %1 𝚍̷𝚘̷𝚎̷𝚜̷ 𝚗̷𝚘̷𝚝̷ 𝚎̷𝚡̷𝚒̷𝚜̷𝚝̷"
		}
	},
	kick: {
		description: "𝐊𝐢𝐜𝐤 𝐦𝐞𝐦𝐛𝐞𝐫 𝐨𝐮𝐭 𝐨𝐟 𝐜𝐡𝐚𝐭 𝐛𝐨𝐱",
		guide: "{pn} @𝚝𝚊𝚐𝚜: 𝚞𝚜𝚎 𝚝𝚘 𝚔𝚒𝚌𝚔 𝚖𝚎𝚖𝚋𝚎𝚛𝚜 𝚠𝚑𝚘 𝚊𝚛𝚎 𝚝𝚊𝚐𝚐𝚎𝚍"
	},
	loadconfig: {
		description: "𝐑𝐞𝐥𝐨𝐚𝐝 𝐜𝐨𝐧𝐟𝐢𝐠 𝐨𝐟 𝐛𝐨𝐭"
	},
	moon: {
		description: "𝐕𝐢𝐞𝐰 𝐦𝐨𝐨𝐧 𝐢𝐦𝐚𝐠𝐞 𝐨𝐧 𝐭𝐡𝐞 𝐧𝐢𝐠𝐡𝐭 𝐲𝐨𝐮 𝐜𝐡𝐨𝐨𝐬𝐞 (𝐝𝐝/𝐦𝐦/𝐲𝐲𝐲𝐲)",
		guide: "  {pn} <𝚍𝚊𝚢/𝚖𝚘𝚗𝚝𝚑/𝚢𝚎𝚊𝚛>\n {pn} <𝚍𝚊𝚢/𝚖𝚘𝚗𝚝𝚑/𝚢𝚎𝚊𝚛> <𝚌𝚊𝚙𝚝𝚒𝚘𝚗>",
		text: {
			invalidDateFormat: "⚠ | 𝙿̷𝚕̷𝚎̷𝚊̷𝚜̷𝚎̷ 𝚎̷𝚗̷𝚝̷𝚎̷𝚛̷ 𝚊̷ 𝚟̷𝚊̷𝚕̷𝚒̷𝚍̷ 𝚍̷𝚊̷𝚝̷𝚎̷ 𝚒̷𝚗̷ 𝙳̷𝙳̷/𝙼̷𝙼̷/𝚈̷𝚈̷𝚈̷𝚈̷ 𝚏̷𝚘̷𝚛̷𝚖̷𝚊̷𝚝̷",
			error: "❎ | 𝙰̷𝚗̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷ 𝚘̷𝚌̷𝚌̷𝚞̷𝚛̷𝚛̷𝚎̷𝚍̷ 𝚠̷𝚑̷𝚒̷𝚕̷𝚎̷ 𝚐̷𝚎̷𝚝̷𝚝̷𝚒̷𝚗̷𝚐̷ 𝚝̷𝚑̷𝚎̷ 𝚖̷𝚘̷𝚘̷𝚗̷ 𝚒̷𝚖̷𝚊̷𝚐̷𝚎̷ 𝚘̷𝚏̷ %1",
			invalidDate: "⚠ | %1 𝚒̷𝚜̷ 𝚗̷𝚘̷𝚝̷ 𝚊̷ 𝚟̷𝚊̷𝚕̷𝚒̷𝚍̷ 𝚍̷𝚊̷𝚝̷𝚎̷",
			caption: "🕊 | 𝙼𝚘𝚘𝚗 𝚒𝚖𝚊𝚐𝚎 𝚘𝚗 %1"
		}
	},
	notification: {
		description: "𝐒𝐞𝐧𝐝 𝐧𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐟𝐫𝐨𝐦 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚𝐥𝐥 𝐛𝐨𝐱",
		guide: "{pn} <𝙼𝚎𝚜𝚊𝚐𝚎>",
		text: {
			missingMessage: "⚠ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐞𝐧𝐝 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬",
			notification: "✿.｡.:* ☆:**:. 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐎𝐖𝐍𝐄𝐑 .:**:.☆*.:｡.✿",
			sendingNotification: "⏳ | 𝚂𝚝𝚊𝚛𝚝 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚗𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗 𝚏𝚛𝚘𝚖 𝚊𝚍𝚖𝚒𝚗 𝚋𝚘𝚝 𝚝𝚘 %1 𝚌𝚑𝚊𝚝 𝚐𝚛𝚘𝚞𝚙𝚜",
			sentNotification: "✅ 𝚂𝚎𝚗𝚝 𝚗𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗 𝚝𝚘 %𝟷 𝚐𝚛𝚘𝚞𝚙𝚜 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢",
			errorSendingNotification: "❎ | 𝙰̷𝚗̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷ 𝚘̷𝚌̷𝚌̷𝚞̷𝚛̷𝚛̷𝚎̷𝚍̷ 𝚠̷𝚑̷𝚒̷𝚕̷𝚎̷ 𝚜̷𝚎̷𝚗̷𝚍̷𝚒̷𝚗̷𝚐̷ 𝚝̷𝚘̷ %1 𝚐̷𝚛̷𝚘̷𝚞̷𝚙̷𝚜̷:\n %2"
		}
	},
	prefix: {
		description: "𝐂𝐡𝐚𝐧𝐠𝐞 𝐭𝐡𝐞 𝐛𝐨𝐭'𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐦𝐚𝐫𝐤 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐜𝐡𝐚𝐭 𝐛𝐨𝐱 𝐨𝐫 𝐭𝐡𝐞 𝐞𝐧𝐭𝐢𝐫𝐞 𝐛𝐨𝐭 𝐬𝐲𝐬𝐭𝐞𝐦 (𝐛𝐨𝐭 𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲)",
		guide: "   {pn} <𝚗𝚎𝚠 𝚙𝚛𝚎𝚏𝚒𝚡>: 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚎𝚠 𝚙𝚛𝚎𝚏𝚒𝚡 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝\n 𝙴𝚡𝚊𝚖𝚙𝚕𝚎:\n    {pn} #\n\n   {pn} <𝚗𝚎𝚠 𝚙𝚛𝚎𝚏𝚒𝚡> -𝚐: 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚎𝚠 𝚙𝚛𝚎𝚏𝚒𝚡 𝚒𝚗 𝚜𝚢𝚜𝚝𝚎𝚖 𝚋𝚘𝚝 (𝚘𝚗𝚕𝚢 𝚊𝚍𝚖𝚒𝚗 𝚋𝚘𝚝)\n   Example:\n    {pn} # -𝚐\n\n   {pn} 𝚛𝚎𝚜𝚎𝚝: 𝚌𝚑𝚊𝚗𝚐𝚎 𝚙𝚛𝚎𝚏𝚒𝚡 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚋𝚘𝚡 𝚌𝚑𝚊𝚝 𝚝𝚘 𝚍𝚎𝚏𝚊𝚞𝚕𝚝",
		text: {
			reset: "⚠ | 𝐘𝐨𝐮𝐫 𝐩𝐫𝐞𝐟𝐢𝐱 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐞𝐬𝐞𝐭 𝐭𝐨 𝐝𝐞𝐟𝐚𝐮𝐥𝐭: %1",
			onlyAdmin: "⚠ | 𝐎𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧 𝐜𝐚𝐧 𝐜𝐡𝐚𝐧𝐠𝐞 𝐩𝐫𝐞𝐟𝐢𝐱 𝐨𝐟 𝐬𝐲𝐬𝐭𝐞𝐦 𝐛𝐨𝐭",
			confirmGlobal: "⚠ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐚𝐜𝐭 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐜𝐡𝐚𝐧𝐠𝐞 𝐩𝐫𝐞𝐟𝐢𝐱 𝐨𝐟 𝐬𝐲𝐬𝐭𝐞𝐦 𝐛𝐨𝐭",
			confirmThisThread: "⚠ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐚𝐜𝐭 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐜𝐡𝐚𝐧𝐠𝐞 𝐩𝐫𝐞𝐟𝐢𝐱 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐛𝐨𝐱 𝐜𝐡𝐚𝐭",
			successGlobal: "⚠ | 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐩𝐫𝐞𝐟𝐢𝐱 𝐨𝐟 𝐬𝐲𝐬𝐭𝐞𝐦 𝐛𝐨𝐭 𝐭𝐨: %1",
			successThisThread: "⚠ | 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐩𝐫𝐞𝐟𝐢𝐱 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐛𝐨𝐱 𝐜𝐡𝐚𝐭 𝐭𝐨: %1",
			myPrefix: "🌐 System prefix: %1\n🛸 Your box chat prefix: %2"
		}
	},
	rank: {
		description: "𝐕𝐢𝐞𝐰 𝐲𝐨𝐮𝐫 𝐥𝐞𝐯𝐞𝐥 𝐨𝐫 𝐭𝐡𝐞 𝐥𝐞𝐯𝐞𝐥 𝐨𝐟 𝐭𝐡𝐞 𝐭𝐚𝐠𝐠𝐞𝐝 𝐩𝐞𝐫𝐬𝐨𝐧. 𝐘𝐨𝐮 𝐜𝐚𝐧 𝐭𝐚𝐠 𝐦𝐚𝐧𝐲 𝐩𝐞𝐨𝐩𝐥𝐞"
	},
	rankup: {
		description: "𝐓𝐮𝐫𝐧 𝐨𝐧/𝐨𝐟𝐟 𝐥𝐞𝐯𝐞𝐥 𝐮𝐩 𝐧𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧",
		guide: "{pn} [on | off]",
		text: {
			syntaxError: "❎ | 𝚂̷𝚢̷𝚗̷𝚝̷𝚊̷𝚡̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷, 𝚘̷𝚗̷𝚕̷𝚢̷ 𝚞̷𝚜̷𝚎̷ {𝚙̷𝚗̷} 𝚘̷𝚗̷ 𝚘̷𝚛̷ {𝚙̷𝚗̷} 𝚘̷𝚏̷𝚏̷",
			turnedOn: "✅ | 𝚃𝚞𝚛𝚗𝚎𝚍 𝚘𝚗 𝚕𝚎𝚟𝚎𝚕 𝚞𝚙 𝚗𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗",
			turnedOff: "✅ | 𝚃𝚞𝚛𝚗𝚎𝚍 𝚘𝚏𝚏 𝚕𝚎𝚟𝚎𝚕 𝚞𝚙 𝚗𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗",
			notiMessage: "🍂⚠ | 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧𝐬 𝐨𝐧 𝐫𝐞𝐚𝐜𝐡𝐢𝐧𝐠 𝐥𝐞𝐯𝐞𝐥 %1"
		}
	},
	refresh: {
		description: "𝐑𝐞𝐟𝐫𝐞𝐬𝐡 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭 𝐨𝐫 𝐮𝐬𝐞𝐫",
		guide: "   {pn} [thread | group]: refresh information of your group chat\n   {pn} group <threadID>: refresh information of group chat by ID\n\n   {pn} user: refresh information of your user\n   {pn} user [<userID> | @tag]: refresh information of user by ID",
		text: {
			refreshMyThreadSuccess: "✅ | Refresh information of your group chat successfully!",
			refreshThreadTargetSuccess: "✅ | Refresh information of group chat %1 successfully!"
		}
	},
	rules: {
		description: "Create/view/add/edit/change position/delete group rules of you",
		guide: "   {pn} [add | -a] <rule to add>: add rule for group.\n   {pn}: view group rules.\n   {pn} [edit | -e] <n> <content after edit>: edit rule number n.\n   {pn} [move | -m] <stt1> <stt2> swap position of rule number <stt1> and <stt2>.\n   {pn} [delete | -d] <n>: delete rule number n.\n   {pn} [remove | -r]: delete all rules of group.\n\n   Example:\n    {pn} add don't spam\n    {pn} move 1 3\n    {pn} -e 1 don't spam message in group\n    {pn} -r"
	},
	sendnoti: {
		description: "𝐂𝐫𝐞𝐚𝐭𝐞 𝐚𝐧𝐝 𝐬𝐞𝐧𝐝 𝐧𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐭𝐨 𝐠𝐫𝐨𝐮𝐩𝐬 𝐭𝐡𝐚𝐭 𝐲𝐨𝐮 𝐦𝐚𝐧𝐚𝐠𝐞",
		guide: "   {pn} create <groupName>: Create a new notification group with name <groupName>\n   Example:\n    {pn} create TEAM1\n\n   {pn} add <groupName>: add current box chat to notification group <groupName> (you must be admin of this box chat)\n   Example:\n    {pn} add TEAM1\n\n   {pn} delete: remove current box chat from notification group <groupName> (you must be creator of this group)\n   Example:\n    {pn} delete TEAM1\n\n   {pn} send <groupName> | <message>: send notification to all groups in notification group <groupName> (you must be admin of those groups)\n   Example:\n    {pn} remove TEAM1\n\n   {pn} remove <groupName>: remove notification group <groupName> (you must be creator of notification group <groupName>)\n   Example:\n    {pn} remove TEAM1",
		text: {
			missingGroupName: "Please enter groupNoti name",
			groupNameExists: "Notification group with name %1 has been created by you before, please choose another name",
			createdGroup: "Created notification group successfully:\n- Name: %1\n- ID: %2",
			missingGroupNameToAdd: "Please enter groupNoti name you want to add this group chat to",
			groupNameNotExists: "You have not created/manage any notification group with name: %1",
			notAdmin: "You are not admin of this group chat",
			added: "Added current group chat to notification group: %1",
			missingGroupNameToDelete: "Please enter groupNoti name you want to delete this group chat from list",
			notInGroup: "Current group chat is not in notification group %1",
			deleted: "Deleted current group chat from notification group: %1",
			failed: "Failed to send notification to %1 group chats: \n%2",
			missingGroupNameToRemove: "Please enter groupNoti name you want to remove",
			removed: "Removed notification group: %1",
			missingGroupNameToSend: "Please enter groupNoti name you want to send message",
			groupIsEmpty: "Notification group \"%1\" is empty",
			sending: "Sending notification to %1 group chats",
			success: "Sent notification to %1 group chats in notification group \"%2\" successfully",
			notAdminOfGroup: "You are not admin of this group",
			missingGroupNameToView: "Please enter groupNoti name you want to view info",
			groupInfo: "- Group Name: %1\n - ID: %2\n - Created at: %3\n%4 ",
			groupInfoHasGroup: "- Has group chats: \n%1",
			noGroup: "You have not created/manage any notification group"
		}
	},
	setalias: {
		description: "𝐀𝐝𝐝 𝐚𝐧 𝐚𝐥𝐢𝐚𝐬 𝐟𝐨𝐫 𝐚𝐧𝐲 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩",
		guide: "𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚜 𝚞𝚜𝚎𝚍 𝚝𝚘 𝚊𝚍𝚍/𝚛𝚎𝚖𝚘𝚟𝚎 𝚊𝚕𝚒𝚊𝚜 𝚏𝚘𝚛 𝚊𝚗𝚢 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚐𝚛𝚘𝚞𝚙\n   {pn} 𝚊𝚍𝚍 <𝚊𝚕𝚒𝚊𝚜> <𝚌𝚘𝚖𝚖𝚊𝚗𝚍>: 𝚊𝚍𝚍 𝚊𝚗 𝚊𝚕𝚒𝚊𝚜 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚐𝚛𝚘𝚞𝚙\n   {pn} 𝚊𝚍𝚍 <𝚊𝚕𝚒𝚊𝚜> <𝚌𝚘𝚖𝚖𝚊𝚗𝚍> -𝚐: 𝚊𝚍𝚍 𝚊𝚗 𝚊𝚕𝚒𝚊𝚜 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚗 𝚝𝚑𝚎 𝚠𝚑𝚘𝚕𝚎 𝚜𝚢𝚜𝚝𝚎𝚖 (𝚘𝚗𝚕𝚢 𝚋𝚘𝚝 𝚊𝚍𝚖𝚒𝚗)\𝚗𝙴𝚡𝚊𝚖𝚙𝚕𝚎:\n {pn} 𝚊𝚍𝚍 𝚌𝚝𝚛𝚔 𝚌𝚞𝚜𝚝𝚘𝚖𝚛𝚊𝚗𝚔𝚌𝚊𝚛𝚍\n\n {pn} [𝚛𝚎𝚖𝚘𝚟𝚎 | 𝚛𝚖] <𝚊𝚕𝚒𝚊𝚜> <𝚌𝚘𝚖𝚖𝚊𝚗𝚍>: 𝚛𝚎𝚖𝚘𝚟𝚎 𝚊𝚗 𝚊𝚕𝚒𝚊𝚜 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚐𝚛𝚘𝚞𝚙\n {pn} [𝚛𝚎𝚖𝚘𝚟𝚎 | 𝚛𝚖] <𝚊𝚕𝚒𝚊𝚜> <𝚌𝚘𝚖𝚖𝚊𝚗𝚍> -𝚐: 𝚛𝚎𝚖𝚘𝚟𝚎 𝚊𝚗 𝚊𝚕𝚒𝚊𝚜 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚗 𝚝𝚑𝚎 𝚠𝚑𝚘𝚕𝚎 𝚜𝚢𝚜𝚝𝚎𝚖 (𝚘𝚗𝚕𝚢 𝚋𝚘𝚝 𝚊𝚍𝚖𝚒𝚗)\𝚗𝙴𝚡𝚊𝚖𝚙𝚕𝚎:\n {pn} 𝚛𝚖 𝚌𝚝𝚛𝚔 𝚌𝚞𝚜𝚝𝚘𝚖𝚛𝚊𝚗𝚔𝚌𝚊𝚛𝚍\n\n {pn} 𝚕𝚒𝚜𝚝: 𝚕𝚒𝚜𝚝 𝚊𝚕𝚕 𝚊𝚕𝚒𝚊𝚜 𝚏𝚘𝚛 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚐𝚛𝚘𝚞𝚙\n {pn} 𝚕𝚒𝚜𝚝 -𝚐: 𝚕𝚒𝚜𝚝 𝚊𝚕𝚕 𝚊𝚕𝚒𝚊𝚜 𝚏𝚘𝚛 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚒𝚗 𝚝𝚑𝚎 𝚠𝚑𝚘𝚕𝚎 𝚜𝚢𝚜𝚝𝚎𝚖"
	},
	setavt: {
		description: "𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭 𝐚𝐯𝐚𝐭𝐚𝐫",
		text: {
			cannotGetImage: "❌ | 𝙰̷𝚗̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷ 𝚘̷𝚌̷𝚌̷𝚞̷𝚛̷𝚛̷𝚎̷𝚍̷ 𝚠̷𝚑̷𝚒̷𝚕̷𝚎̷ 𝚚̷𝚞̷𝚎̷𝚛̷𝚢̷𝚒̷𝚗̷𝚐̷ 𝚝̷𝚑̷𝚎̷ 𝚒̷𝚖̷𝚊̷𝚐̷𝚎̷ 𝚞̷𝚛̷𝚕̷",
			invalidImageFormat: "❌ | 𝙸̷𝚗̷𝚟̷𝚊̷𝚕̷𝚒̷𝚍̷ 𝚒̷𝚖̷𝚊̷𝚐̷𝚎̷ 𝚏̷𝚘̷𝚛̷𝚖̷𝚊̷𝚝̷",
			changedAvatar: "✅ | 𝙲𝚑𝚊𝚗𝚐𝚎𝚍 𝚋𝚘𝚝 𝚊𝚟𝚊𝚝𝚊𝚛 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢"
		}
	},
	setlang: {
		description: "𝐒𝐞𝐭 𝐝𝐞𝐟𝐚𝐮𝐥𝐭 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 𝐨𝐟 𝐛𝐨𝐭 𝐟𝐨𝐫 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 𝐜𝐡𝐚𝐭 𝐨𝐫 𝐚𝐥𝐥 𝐜𝐡𝐚𝐭𝐬",
		guide: "   {pn} <𝚕𝚊𝚗𝚐𝚞𝚊𝚐𝚎 𝚌𝚘𝚍𝚎 𝙸𝚂𝙾 𝟼𝟹𝟿-𝟷\n   𝙴𝚡𝚊𝚖𝚙𝚕𝚎:    {pn} en    {pn} vi",
		text: {
			setLangForAll: "✅ | 𝚂𝚎𝚝 𝚍𝚎𝚏𝚊𝚞𝚕𝚝 𝚕𝚊𝚗𝚐𝚞𝚊𝚐𝚎 𝚏𝚘𝚛 𝚊𝚕𝚕 𝚌𝚑𝚊𝚝𝚜: %1",
			setLangForCurrent: "✅ | 𝚂𝚎𝚝 𝚍𝚎𝚏𝚊𝚞𝚕𝚝 𝚕𝚊𝚗𝚐𝚞𝚊𝚐𝚎 𝚏𝚘𝚛 𝚌𝚞𝚛𝚛𝚎𝚗𝚝 𝚌𝚑𝚊𝚝: %1",
			noPermission: "⚠ | 𝐎𝐧𝐥𝐲 𝐛𝐨𝐭 𝐚𝐝𝐦𝐢𝐧 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝"
		}
	},
	setleave: {
		description: "Edit content/turn on/off leave message when member leave your group chat",
		guide: {
			body: "   {pn} on: Turn on leave message\n   {pn} off: Turn off leave message\n   {pn} text [<content> | reset]: edit text content or reset to default, available shortcuts:\n  + {userName}: name of member who leave group\n  + {userNameTag}: name of member who leave group (tag)\n  + {boxName}: name of group chat\n  + {type}: leave/kicked by admin\n  + {session}: session in day\n\n   Example:\n    {pn} text {userName} has {type} group, see you again 🤧\n\n   Reply or send a message with file with content {pn} file: to add attachment file to leave message (image, video, audio)\n\nExample:\n   {pn} file reset: reset file",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setleave/setleave_en_1.png`]: "https://i.ibb.co/2FKJHJr/guide1.png"
			}
		},
		text: {
			missingContent: "Please enter content",
			edited: "Edited leave message content of your group to:\n%1",
			reseted: "Reseted leave message content",
			noFile: "No leave message attachment file to reset",
			resetedFile: "Reseted leave message attachment file successfully",
			missingFile: "Please reply this message with image/video/audio file",
			addedFile: "Added %1 attachment file to your leave message"
		}
	},
	setname: {
		description: "𝐂𝐡𝐚𝐧𝐠𝐞 𝐧𝐢𝐜𝐤𝐧𝐚𝐦𝐞 𝐨𝐟 𝐚𝐥𝐥 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐢𝐧 𝐜𝐡𝐚𝐭 𝐨𝐫 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐚𝐠𝐠𝐞𝐝 𝐛𝐲 𝐚 𝐟𝐨𝐫𝐦𝐚𝐭",
		guide: {
			body: "{pn} <𝚗𝚒𝚌𝚔 𝚗𝚊𝚖𝚎>: 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚒𝚌𝚔𝚗𝚊𝚖𝚎 𝚘𝚏 𝚢𝚘𝚞𝚛𝚜𝚎𝚕𝚏\n {pn} @𝚝𝚊𝚐𝚜 <𝚗𝚒𝚌𝚔 𝚗𝚊𝚖𝚎>: 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚒𝚌𝚔𝚗𝚊𝚖𝚎 𝚘𝚏 𝚖𝚎𝚖𝚋𝚎𝚛𝚜 𝚝𝚊𝚐𝚐𝚎𝚍\n {pn} 𝚊𝚕𝚕 <𝚗𝚒𝚌𝚔 𝚗𝚊𝚖𝚎>: 𝚌𝚑𝚊𝚗𝚐𝚎 𝚗𝚒𝚌𝚔𝚗𝚊𝚖𝚎 𝚘𝚏 𝚊𝚕𝚕 𝚖𝚎𝚖𝚋𝚎𝚛𝚜 𝚒𝚗 𝚌𝚑𝚊𝚝\n\n𝚆𝚒𝚝𝚑 𝚊𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝚜𝚑𝚘𝚛𝚝𝚌𝚞𝚝𝚜:\n + {userName}: 𝚗𝚊𝚖𝚎 𝚘𝚏 𝚖𝚎𝚖𝚋𝚎𝚛\n + {userID}: 𝙸𝙳 𝚘𝚏 𝚖𝚎𝚖𝚋𝚎𝚛\n\n 𝙴𝚡𝚊𝚖𝚙𝚕𝚎: (𝚜𝚎𝚎 𝚒𝚖𝚊𝚐𝚎)",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_1.png`]: "https://i.ibb.co/gFh23zb/guide1.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_2.png`]: "https://i.ibb.co/BNWHKgj/guide2.png"
			}
		},
		text: {
			error: "❎ | 𝙰̷𝚗̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷ 𝚑̷𝚊̷𝚜̷ 𝚘̷𝚌̷𝚌̷𝚞̷𝚛̷𝚛̷𝚎̷𝚍̷, 𝚝̷𝚛̷𝚢̷ 𝚝̷𝚞̷𝚛̷𝚗̷𝚒̷𝚗̷𝚐̷ 𝚘̷𝚏̷𝚏̷ 𝚝̷𝚑̷𝚎̷ 𝚒̷𝚗̷𝚟̷𝚒̷𝚝̷𝚎̷ 𝚕̷𝚒̷𝚗̷𝚔̷ 𝚏̷𝚎̷𝚊̷𝚝̷𝚞̷𝚛̷𝚎̷ 𝚒̷𝚗̷ 𝚝̷𝚑̷𝚎̷ 𝚐̷𝚛̷𝚘̷𝚞̷𝚙̷ 𝚊̷𝚗̷𝚍̷ 𝚝̷𝚛̷𝚢̷ 𝚊̷𝚐̷𝚊̷𝚒̷𝚗̷ 𝚕̷𝚊̷𝚝̷𝚎̷𝚛̷"
		}
	},
	setrole: {
		description: "𝐄𝐝𝐢𝐭 𝐫𝐨𝐥𝐞 𝐨𝐟 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 (𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐰𝐢𝐭𝐡 𝐫𝐨𝐥𝐞 < 𝟐)",
		guide: "   {pn} <commandName> <new role>: set new role for command\n   With:\n   + <commandName>: command name\n   + <new role>: new role of command with:\n   + <new role> = 0: command can be used by all members in group\n   + <new role> = 1: command can be used by admin only\n   + <new role> = default: reset role of command to default\n   Example:\n    {pn} rank 1: (command rank can be used by admin only)\n    {pn} rank 0: (command rank can be used by all members in group)\n    {pn} rank default: reset to default\n—————\n   {pn} [viewrole|view|show]: view role of edited commands",
		text: {
			noEditedCommand: "⚠ | 𝚈𝚘𝚞𝚛 𝚐𝚛𝚘𝚞𝚙 𝚑𝚊𝚜 𝚗𝚘 𝚎𝚍𝚒𝚝𝚎𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍",
			editedCommand: "⚠️ | 𝐘𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐡𝐚𝐬 𝐞𝐝𝐢𝐭𝐞𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬:\n",
			noPermission: "❗ | 𝐎𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝",
			commandNotFound: "❎ | 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 \"%1\" 𝚗𝚘𝚝 𝚏𝚘𝚞𝚗𝚍",
			noChangeRole: "❗ | 𝙲̷𝚊̷𝚗̷'𝚝̷ 𝚌̷𝚑̷𝚊̷𝚗̷𝚐̷𝚎̷ 𝚛̷𝚘̷𝚕̷𝚎̷ 𝚘̷𝚏̷ 𝚌̷𝚘̷𝚖̷𝚖̷𝚊̷𝚗̷𝚍̷ \"%1\"",
			resetRole: "⚠ | 𝚁𝚎𝚜𝚎𝚝 𝚛𝚘𝚕𝚎 𝚘𝚏 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 \"%1\" 𝚝𝚘 𝚍𝚎𝚏𝚊𝚞𝚕𝚝",
			changedRole: "✅ | 𝙲𝚑𝚊𝚗𝚐𝚎𝚍 𝚛𝚘𝚕𝚎 𝚘𝚏 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 \"%1\" 𝚝𝚘 %2"
		}
	},
	setwelcome: {
		description: "Edit welcome message content when new member join your group chat",
		guide: {
			body: "   {pn} text [<content> | reset]: edit text content or reset to default, with some shortcuts:\n  + {userName}: new member name\n  + {userNameTag}: new member name (tag)\n  + {boxName}:  group chat name\n  + {multiple}: you || you guys\n  + {session}:  session in day\n\n   Example:\n    {pn} text Hello {userName}, welcome to {boxName}, have a nice day {multiple}\n\n   Reply (phản hồi) or send a message with file with content {pn} file: to add file attachments to welcome message (image, video, audio)\n\n   Example:\n    {pn} file reset: delete file attachments",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setwelcome/setwelcome_en_1.png`]: "https://i.ibb.co/vsCz0ks/setwelcome-en-1.png"
			}
		},
		text: {
			missingContent: "Please enter welcome message content",
			edited: "Edited welcome message content of your group to: %1",
			reseted: "Reseted welcome message content",
			noFile: "No file attachments to delete",
			resetedFile: "Reseted file attachments successfully",
			missingFile: "Please reply this message with image/video/audio file",
			addedFile: "Added %1 file attachments to your group welcome message"
		}
	},
	shortcut: {
		description: "Add a shortcut for your message in group chat",
		text: {
			missingContent: 'Please enter the message content',
			shortcutExists: 'Shortcut "%1" already exists, react to this message to replace the content of the shortcut',
			shortcutExistsByOther: 'Shortcut %1 has been added by other member, please try another keyword',
			added: 'Added shortcut %1 => %2',
			addedAttachment: ' with %1 attachment(s)',
			missingKey: 'Please enter the keyword of the shortcut you want to delete',
			notFound: 'No shortcut found for keyword %1 in your group chat',
			onlyAdmin: 'Only administrators can delete other people\'s shortcuts',
			deleted: 'Deleted shortcut %1',
			empty: 'Your group chat has not added any shortcuts',
			message: 'Message',
			attachment: 'Attachment',
			list: 'Your shortcuts list',
			onlyAdminRemoveAll: 'Only administrators can remove all shortcuts in the group chat',
			confirmRemoveAll: 'Are you sure you want to remove all shortcuts in this group chat? (react to this message to confirm)',
			removedAll: 'Removed all shortcuts in your group chat'
		}
	},
	simsimi: {
		description: "Chat with simsimi",
		guide: "   {pn} [on | off]: turn on/off simsimi\n\n   {pn} <word>: chat with simsimi\n   Example:\n    {pn} hi",
		text: {
			turnedOn: "Turned on simsimi successfully!",
			turnedOff: "Turned off simsimi successfully!",
			chatting: "Chatting with simsimi...",
			error: "Simsimi is busy, please try again later"
		}
	},
	sorthelp: {
		description: "Sort help list",
		guide: "{pn} [name | category]",
		text: {
			savedName: "Saved sort help list by name",
			savedCategory: "Saved sort help list by category"
		}
	},
	thread: {
		description: "Manage group chat in bot system",
		guide: "   {pn} [find | -f | search | -s] <name to find>: search group chat in bot data by name\n   {pn} [find | -f | search | -s] [-j | joined] <name to find>: search group chat in bot data that bot still joined by name\n   {pn} [ban | -b] [<tid> | leave blank] <reason>: use to ban group with id <tid> or current group using bot\n   Example:\n    {pn} ban 3950898668362484 spam bot\n    {pn} ban spam too much\n    {pn} unban [<tid> | leave blank] to unban group with id <tid> or current group",
		text: {
			noPermission: "You don't have permission to use this feature",
			found: "🔎 Found %1 group matching the keyword \"%3\" in bot data:\n%3",
			notFound: "❌ No group found matching the keyword: \"%1\" in bot data",
			hasBanned: "Group with id [%1 | %2] has been banned before:\n» Reason: %3\n» Time: %4",
			banned: "✅ | 𝙱̷𝚊̷𝚗̷𝚗̷𝚎̷𝚍̷ 𝚐̷𝚛̷𝚘̷𝚞̷𝚙̷ 𝚠̷𝚒̷𝚝̷𝚑̷ 𝚒̷𝚍̷ [%1 | %2] 𝚞̷𝚜̷𝚒̷𝚗̷𝚐̷ 𝚋̷𝚘̷𝚝̷.\n» 𝚁̷𝚎̷𝚊̷𝚜̷𝚘̷𝚗̷: %3\n 𝚃̷𝚒̷𝚖̷𝚎̷: %4",
			notBanned: "⚠ | 𝙶̷𝚛̷𝚘̷𝚞̷𝚙̷ 𝚠̷𝚒̷𝚝̷𝚑̷ 𝚒̷𝚍̷ [%1 | %2] 𝚒̷𝚜̷ 𝚗̷𝚘̷𝚝̷ 𝚋̷𝚊̷𝚗̷𝚗̷𝚎̷𝚍̷ 𝚞̷𝚜̷𝚒̷𝚗̷𝚐̷ 𝚋̷𝚘̷𝚝̷",
			unbanned: "✅ | 𝚄𝚗𝚋𝚊𝚗𝚗𝚎𝚍 𝚐𝚛𝚘𝚞𝚙 𝚠𝚒𝚝𝚑 𝚝𝚒𝚍 [%𝟷 | %𝟸] 𝚞𝚜𝚒𝚗𝚐 𝚋𝚘𝚝",
			missingReason: "⚠ | 𝙱̷𝚊̷𝚗̷ 𝚛̷𝚎̷𝚊̷𝚜̷𝚘̷𝚗̷ 𝚌̷𝚊̷𝚗̷𝚗̷𝚘̷𝚝̷ 𝚋̷𝚎̷ 𝚎̷𝚖̷𝚙̷𝚝̷𝚢̷",
			info: "» 𝙱𝚘𝚡 𝙸𝙳: %1\n» 𝙽𝚊𝚖𝚎: %2\n» 𝙳𝚊𝚝𝚎 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚍𝚊𝚝𝚊: %3\n» 𝚃𝚘𝚝𝚊𝚕 𝚖𝚎𝚖𝚋𝚎𝚛𝚜: %4\n» 𝙱𝚘𝚢: %5 𝚖𝚎𝚖𝚋𝚎𝚛𝚜\n» 𝙶𝚒𝚛𝚕: %6 𝚖𝚎𝚖𝚋𝚎𝚛𝚜\n» 𝚃𝚘𝚝𝚊𝚕 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜: %7%8"
		}
	},
	tid: {
		description: "𝙑𝙞𝙚𝙬 𝙩𝙝𝙧𝙚𝙖𝙙𝙄𝘿 𝙤𝙛 𝙮𝙤𝙪𝙧 𝙜𝙧𝙤𝙪𝙥 𝙘𝙝𝙖𝙩",
		guide: "{pn}"
	},
	tik: {
		description: "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙫𝙞𝙙𝙚𝙤/𝙨𝙡𝙞𝙙𝙚 (𝙞𝙢𝙖𝙜𝙚), 𝙖𝙪𝙙𝙞𝙤 𝙛𝙧𝙤𝙢 𝙩𝙞𝙠𝙩𝙤𝙠 𝙡𝙞𝙣𝙠",
		guide: "{pn} [𝚟𝚒𝚍𝚎𝚘|-𝚟|𝚟] <𝚞𝚛𝚕>: 𝚞𝚜𝚎 𝚝𝚘 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚟𝚒𝚍𝚎𝚘/𝚜𝚕𝚒𝚍𝚎 (𝚒𝚖𝚊𝚐𝚎) 𝚏𝚛𝚘𝚖 𝚝𝚒𝚔𝚝𝚘𝚔 𝚕𝚒𝚗𝚔.\n {pn} [𝚊𝚞𝚍𝚒𝚘|-𝚊|𝚊] <𝚞𝚛𝚕>: 𝚞𝚜𝚎 𝚝𝚘 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚊𝚞𝚍𝚒𝚘 𝚏𝚛𝚘𝚖 𝚝𝚒𝚔𝚝𝚘𝚔 𝚕𝚒𝚗𝚔",
		text: {
			invalidUrl: "⚠ | 𝙿̷𝚕̷𝚎̷𝚊̷𝚜̷𝚎̷ 𝚎̷𝚗̷𝚝̷𝚎̷𝚛̷ 𝚊̷ 𝚟̷𝚊̷𝚕̷𝚒̷𝚍̷ 𝚝̷𝚒̷𝚔̷𝚝̷𝚘̷𝚔̷ 𝚞̷𝚛̷𝚕̷",
			downloadingVideo: "⏳ | 𝙳̷𝚘̷𝚠̷𝚗̷𝚕̷𝚘̷𝚊̷𝚍̷𝚒̷𝚗̷𝚐̷ 𝚟̷𝚒̷𝚍̷𝚎̷𝚘̷: %1...",
			downloadedSlide: "✅ | 𝙳̷𝚘̷𝚠̷𝚗̷𝚕̷𝚘̷𝚊̷𝚍̷𝚎̷𝚍̷ 𝚜̷𝚕̷𝚒̷𝚍̷𝚎̷: %1\n%2",
			downloadedVideo: "𝙳̷𝚘̷𝚠̷𝚗̷𝚕̷𝚘̷𝚊̷𝚍̷𝚎̷𝚍̷ 𝚟̷𝚒̷𝚍̷𝚎̷𝚘̷: %2",
			downloadingAudio: "⏳ | 𝙳̷𝚘̷𝚠̷𝚗̷𝚕̷𝚘̷𝚊̷𝚍̷𝚒̷𝚗̷𝚐̷ 𝚊̷𝚞̷𝚍̷𝚒̷𝚘̷: %1...",
			downloadedAudio: "✅ | 𝙳̷𝚘̷𝚠̷𝚗̷𝚕̷𝚘̷𝚊̷𝚍̷𝚎̷𝚍̷ 𝚊̷𝚞̷𝚍̷𝚒̷𝚘̷: %1"
		}
	},
	trigger: {
		description: "𝙏𝙧𝙞𝙜𝙜𝙚𝙧 𝙞𝙢𝙖𝙜𝙚",
		guide: "{pn} [@𝚝𝚊𝚐 | 𝚎𝚖𝚙𝚝𝚢]"
	},
	uid: {
		description: "𝙑𝙞𝙚𝙬 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙪𝙨𝙚𝙧 𝙞𝙙 𝙤𝙛 𝙪𝙨𝙚𝙧",
		guide: "   {pn}: 𝚞𝚜𝚎 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚢𝚘𝚞𝚛 𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 𝚞𝚜𝚎𝚛 𝚒𝚍\n {pn} @𝚝𝚊𝚐: 𝚟𝚒𝚎𝚠 𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 𝚞𝚜𝚎𝚛 𝚒𝚍 𝚘𝚏 𝚝𝚊𝚐𝚐𝚎𝚍 𝚙𝚎𝚘𝚙𝚕𝚎\n {pn} <𝚙𝚛𝚘𝚏𝚒𝚕𝚎 𝚕𝚒𝚗𝚔>: 𝚟𝚒𝚎𝚠 𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 𝚞𝚜𝚎𝚛 𝚒𝚍 𝚘𝚏 𝚙𝚛𝚘𝚏𝚒𝚕𝚎 𝚕𝚒𝚗𝚔",
		text: {
			syntaxError: "⚠ | 𝙿̷𝚕̷𝚎̷𝚊̷𝚜̷𝚎̷ 𝚝̷𝚊̷𝚐̷ 𝚝̷𝚑̷𝚎̷ 𝚙̷𝚎̷𝚛̷𝚜̷𝚘̷𝚗̷ 𝚢̷𝚘̷𝚞̷ 𝚠̷𝚊̷𝚗̷𝚝̷ 𝚝̷𝚘̷ 𝚟̷𝚒̷𝚎̷𝚠̷ 𝚞̷𝚒̷𝚍̷ 𝚘̷𝚛̷ 𝚕̷𝚎̷𝚊̷𝚟̷𝚎̷ 𝚒̷𝚝̷ 𝚋̷𝚕̷𝚊̷𝚗̷𝚔̷ 𝚝̷𝚘̷ 𝚟̷𝚒̷𝚎̷𝚠̷ 𝚢̷𝚘̷𝚞̷𝚛̷ 𝚘̷𝚠̷𝚗̷ 𝚞̷𝚒̷𝚍̷"
		}
	},
	unsend: {
		description: "𝐔𝐧𝐬𝐞𝐧𝐝 𝐛𝐨𝐭'𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞",
		guide: "𝚛𝚎𝚙𝚕𝚢 𝚝𝚑𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚞𝚗𝚜𝚎𝚗𝚍 𝚊𝚗𝚍 𝚌𝚊𝚕𝚕 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 {pn}",
		text: {
			syntaxError: "⚠ | 𝙿̷𝚕̷𝚎̷𝚊̷𝚜̷𝚎̷ 𝚛̷𝚎̷𝚙̷𝚕̷𝚢̷ 𝚝̷𝚑̷𝚎̷ 𝚖̷𝚎̷𝚜̷𝚜̷𝚊̷𝚐̷𝚎̷ 𝚢̷𝚘̷𝚞̷ 𝚠̷𝚊̷𝚗̷𝚝̷ 𝚝̷𝚘̷ 𝚞̷𝚗̷𝚜̷𝚎̷𝚗̷𝚍̷"
		}
	},
	user: {
		description: "Manage users in bot system",
		guide: "   {pn} [find | -f | search | -s] <name to find>: search for users in bot data by name\n\n   {pn} [ban | -b] [<uid> | @tag | reply message] <reason>: to ban user with id <uid> or tagged user or sender of message replied using bot\n\n   {pn} unban [<uid> | @tag | reply message]: to unban user using bot",
		text: {
			noUserFound: "❌ No user found with name matching keyword: \"%1\" in bot data",
			userFound: "🔎 Found %1 user with name matching keyword \"%2\" in bot data:\n%3",
			uidRequired: "Uid of user to ban cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason>",
			reasonRequired: "Reason to ban user cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason>",
			userHasBanned: "User with id [%1 | %2] has been banned before:\n» Reason: %3\n» Date: %4",
			userBanned: "User with id [%1 | %2] has been banned:\n» Reason: %3\n» Date: %4",
			uidRequiredUnban: "Uid of user to unban cannot be empty",
			userNotBanned: "User with id [%1 | %2] is not banned",
			userUnbanned: "User with id [%1 | %2] has been unbanned"
		}
	},
	videofb: {
		description: "Download video/story from facebook (public)",
		guide: "   {pn} <url video/story>: tải video từ facebook",
		text: {
			missingUrl: "Please enter the facebook video/story (public) url you want to download",
			error: "An error occurred while downloading the video",
			downloading: "Downloading video for you",
			tooLarge: "Sorry, we can't download the video for you because the size is larger than 83MB"
		}
	},
	warn: {
		description: "warn member in group, if they have 3 warns, they will be banned",
		guide: "   {pn} @tag <reason>: warn member\n   {pn} list: view list of warned members\n   {pn} listban: view list of banned members\n   {pn} info [@tag | <uid> | leave blank]: view warn info of tagged member or uid or yourself\n   {pn} unban <uid>: unban member by uid\n   {pn} unwarn <uid> [<warn number> | leave blank]: unwarn member by uid and warn number\n   {pn} warn reset: reset all warn data\n⚠️ You need to set admin for bot to auto kick banned members",
		text: {
			list: "List of members who have been warned:\n%1\n\nTo view the details of the warnings, use the \"%2warn info [@tag | <uid> | leave blank]\" command: to view the warning information of the tagged person or uid or yourself",
			listBan: "List of members who have been warned 3 times and banned from the box:\n%1",
			listEmpty: "Your group has no members who have been warned",
			listBanEmpty: "Your group has no members banned from the box",
			invalidUid: "Please enter a valid uid of the person you want to view information",
			noData: "No data",
			noPermission: "❌ Only group administrators can unban members banned from the box",
			invalidUid2: "⚠️ Please enter a valid uid of the person you want to unban",
			notBanned: "⚠️ The user with id %1 has not been banned from your box",
			unbanSuccess: "✅ Successfully unbanned member [%1 | %2], currently this person can join your chat box",
			noPermission2: "❌ Only group administrators can remove warnings from members in the group",
			invalidUid3: "⚠️ Please enter a uid or tag the person you want to remove the warning",
			noData2: "⚠️ The user with id %1 has no warning data",
			notEnoughWarn: "❌ The user %1 only has %2 warnings",
			unwarnSuccess: "✅ Successfully removed the %1 warning of member [%2 | %3]",
			noPermission3: "❌ Only group administrators can reset warning data",
			resetWarnSuccess: "✅ Successfully reset warning data",
			noPermission4: "❌ Only group administrators can warn members in the group",
			invalidUid4: "⚠️ You need to tag or reply to the message of the person you want to warn",
			warnSuccess: "⚠️ Warned member %1 times %2\n- Uid: %3\n- Reason: %4\n- Date Time: %5\nThis member has been warned 3 times and banned from the box, to unban use the command \"%6warn unban <uid>\" (with uid is the uid of the person you want to unban)",
			noPermission5: "⚠️ Bot needs administrator permissions to kick banned members",
			warnSuccess2: "⚠️ Warned member %1 times %2\n- Uid: %3\n- Reason: %4\n- Date Time: %5\nIf this person violates %6 more times, they will be banned from the box",
			hasBanned: "⚠️ The following members have been warned 3 times before and banned from the box:\n%1",
			failedKick: "⚠️ An error occurred when kicking the following members:\n%1"
		}
	},
	weather: {
		description: "view the current and next 5 days weather forecast",
		guide: "{pn} <location>",
		text: {
			syntaxError: "Please enter a location",
			notFound: "Location not found: %1",
			error: "An error has occurred: %1",
			today: "Today's weather:\n%1\n🌡 Low - high temperature %2°C - %3°C\n🌡 Feels like %4°C - %5°C\n🌅 Sunrise %6\n🌄 Sunset %7\n🌃 Moonrise %8\n🏙️ Moonset %9\n🌞 Day: %10\n🌙 Night: %11"
		}
	},
	ytb: {
		description: "𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐯𝐢𝐝𝐞𝐨, 𝐚𝐮𝐝𝐢𝐨 𝐨𝐫 𝐯𝐢𝐞𝐰 𝐯𝐢𝐝𝐞𝐨 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐨𝐧 𝐘𝐨𝐮𝐓𝐮𝐛𝐞",
		guide: "{pn} [𝚟𝚒𝚍𝚎𝚘|-𝚟] [<𝚟𝚒𝚍𝚎𝚘 𝚗𝚊𝚖𝚎>|<𝚟𝚒𝚍𝚎𝚘 𝚕𝚒𝚗𝚔>]: 𝚞𝚜𝚎 𝚝𝚘 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚟𝚒𝚍𝚎𝚘 𝚏𝚛𝚘𝚖 𝚢𝚘𝚞𝚝𝚞𝚋𝚎.\n {pn} [𝚊𝚞𝚍𝚒𝚘|-𝚊] [<𝚟𝚒𝚍𝚎𝚘 𝚗𝚊𝚖𝚎>|<𝚟𝚒𝚍𝚎𝚘 𝚕𝚒𝚗𝚔>]: 𝚞𝚜𝚎 𝚝𝚘 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚊𝚞𝚍𝚒𝚘 𝚏𝚛𝚘𝚖 𝚢𝚘𝚞𝚝𝚞𝚋𝚎\n {pn} [𝚒𝚗𝚏𝚘|-𝚒] [<𝚟𝚒𝚍𝚎𝚘 𝚗𝚊𝚖𝚎>|<𝚟𝚒𝚍𝚎𝚘 𝚕𝚒𝚗𝚔>]: 𝚞𝚜𝚎 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚟𝚒𝚍𝚎𝚘 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗 𝚏𝚛𝚘𝚖 𝚢𝚘𝚞𝚝𝚞𝚋𝚎\n 𝙴𝚡𝚊𝚖𝚙𝚕𝚎:\n {pn} -𝚟 𝙰𝚕𝚘𝚗𝚎 𝚡 𝚏𝚊𝚍𝚎𝚍\n {pn} -𝚊 𝙰𝚕𝚘𝚗𝚎 𝚡 𝚏𝚊𝚍𝚎𝚍\n {pn} -𝚒 𝙰𝚕𝚘𝚗𝚎 𝚡 𝚏𝚊𝚍𝚎𝚍",
		text: {
			error: "❎ | 𝙰̷𝚗̷ 𝚎̷𝚛̷𝚛̷𝚘̷𝚛̷ 𝚑̷𝚊̷𝚜̷ 𝚘̷𝚌̷𝚌̷𝚞̷𝚛̷𝚛̷𝚎̷𝚍̷: %1",
			noResult: "❎ | 𝙽̷𝚘̷ 𝚜̷𝚎̷𝚊̷𝚛̷𝚌̷𝚑̷ 𝚛̷𝚎̷𝚜̷𝚞̷𝚕̷𝚝̷𝚜̷ 𝚖̷𝚊̷𝚝̷𝚌̷𝚑̷ 𝚝̷𝚑̷𝚎̷ 𝚔̷𝚎̷𝚢̷𝚠̷𝚘̷𝚛̷𝚍̷ %1",
			choose: "%1⚠ | 𝚁𝚎𝚙𝚕𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚝𝚑𝚎 𝚗𝚞𝚖𝚋𝚎𝚛 𝚝𝚘 𝚌𝚑𝚘𝚘𝚜𝚎 𝚘𝚛 𝚊𝚗𝚢 𝚌𝚘𝚗𝚝𝚎𝚗𝚝 𝚝𝚘 𝚌𝚊𝚗𝚌𝚎𝚕",
			downloading: "✅ | 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚟𝚒𝚍𝚎𝚘 %1",
			noVideo: "❎ | 𝚂̷𝚘̷𝚛̷𝚛̷𝚢̷, 𝚗̷𝚘̷ 𝚟̷𝚒̷𝚍̷𝚎̷𝚘̷ 𝚠̷𝚊̷𝚜̷ 𝚏̷𝚘̷𝚞̷𝚗̷𝚍̷ 𝚠̷𝚒̷𝚝̷𝚑̷ 𝚊̷ 𝚜̷𝚒̷𝚣̷𝚎̷ 𝚕̷𝚎̷𝚜̷𝚜̷ 𝚝̷𝚑̷𝚊̷𝚗̷ 𝟾̷𝟹̷𝙼̷𝙱̷",
			downloadingAudio: "✅ | 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚊𝚞𝚍𝚒𝚘 %1",
			noAudio: "❎ | 𝚂̷𝚘̷𝚛̷𝚛̷𝚢̷, 𝚗̷𝚘̷ 𝚊̷𝚞̷𝚍̷𝚒̷𝚘̷ 𝚠̷𝚊̷𝚜̷ 𝚏̷𝚘̷𝚞̷𝚗̷𝚍̷ 𝚠̷𝚒̷𝚝̷𝚑̷ 𝚊̷ 𝚜̷𝚒̷𝚣̷𝚎̷ 𝚕̷𝚎̷𝚜̷𝚜̷ 𝚝̷𝚑̷𝚊̷𝚗̷ 𝟸̷𝟼̷𝙼̷𝙱̷",
			info: "💠 𝚃𝚒𝚝𝚕𝚎: %1\n🏪 𝙲𝚑𝚊𝚗𝚗𝚎𝚕: %2\n👨‍👩‍👧‍👦 𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎𝚛: %3\n⏱ 𝚅𝚒𝚍𝚎𝚘 𝚝𝚒𝚖𝚎: %4\n👀 𝚅𝚒𝚎𝚠: %5\n👍 𝙻𝚒𝚔𝚎: %6\n🆙 𝚄𝚙𝚕𝚘𝚊𝚍 𝚍𝚊𝚝𝚎: %7\𝚗🔠 𝙸𝙳: %8\n🔗 𝙻𝚒𝚗𝚔: %9",
			listChapter: "\n⚠ | 𝙻𝚒𝚜𝚝 𝚌𝚑𝚊𝚙𝚝𝚎𝚛: %1\n"
		}
	}
};