export const adListingTypeEnums = {
	ForSelling: 1,
	MontlyRent: 2,
	DailyRent: 3,
}

export const crud = {
	create: 1,
	read: 2,
	update: 3,
	delete: 4,
	list: 5,
	any: 7,
	change: 9,
	with: 10,
	end: 11,
	changeType: 12,
	userAndCriterions: 13,
	kanban: 14,
	changeDate: 15,
	count: 16,
}

export const socialType = {
	whatsapp: 'ion-social-whatsapp',
	instagram: 'ion-social-instagram',
	linkedin: 'ion-social-linkedin',
	youtube: 'ion-social-youtube',
	facebook: 'ion-social-facebook',
	twitter: 'ion-social-twitter',
	pinterest: 'ion-social-pinterest'
}

export const mediaType = {
	link: 0,
	phone: 1
}

export const viewType = {
	list: 0,
	grid: 1
}

export const fetchRequest = {
	currentPage: 1,
	rowCount: 9, // take
	pageCount: 0, // skip
	search: '',
	sort: 'id',
	desc: true,
	subId: 0
}

export const tagColorsCode = {
	1: "#87d068",
	2: "#2db7f5",
	3: "#108ee9"
}

export const adlistingProperty = {
	set_active: { TRUE: 'set-as-active', FALSE: 'set-as-not-active' },
	set_vip: { TRUE: 'set-as-vip', FALSE: 'set-as-not-vip' },
	set_premium: { TRUE: 'set-as-premium', FALSE: 'set-as-not-premium' }
}