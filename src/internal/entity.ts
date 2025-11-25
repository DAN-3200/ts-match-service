// serão collections separadas

export interface User {
	_id?: string;
	name: string;
	email: string;
	password: string;
	interests: string[];
	createdAt?: Date;
}

export interface Organization {
	_id?: string;
	name: string;
	description?: string;
	contactEmail: string;
	createdAt?: Date;
}

export interface Opportunity {
	_id?: string;
	title: string;
	description?: string;
	tags: string[];
	createdAt?: Date;
	// FOREIGN KEY pra ajudar na busca
	fkOrganization: string;
	fkUser?: string;
}
