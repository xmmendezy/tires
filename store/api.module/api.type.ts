import config from '../config.store';

interface LoginDto {
	login: string;
	password: string;
}

interface IProduct {
	readonly id: string;
	readonly ref: string;
	readonly label: string;
	readonly description: string;
	readonly price: number;
	readonly status: string;
}

class Product implements IProduct {
	constructor(data: IProduct) {
		this.id = data.id;
		this.ref = data.ref;
		this.label = data.label;
		this.description = data.description;
		this.price = parseFloat(data.price as any);
		this.status = data.status;
	}

	public id: string;
	public ref: string;
	public label: string;
	public description: string;
	public price: number;
	public status: string;
	public image: string = '';

	public set_image(name: string) {
		const fullname = name.split('.');
		name = fullname.slice(0, fullname.length - 1).join('');
		const exts = fullname[fullname.length - 1];
		this.image = `${config.origin}/viewimage.php?modulepart=product&file=/${this.ref}/thumbs/${name}_small.${exts}`;
	}
}

export { LoginDto, IProduct, Product };
