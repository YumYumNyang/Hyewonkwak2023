import {
	Block,
	BlockMap,
	CollectionPropertySchemaMap,
	FormattedDate,
} from "notion-types";
import { getDateValue, getTextContent } from "notion-utils";

export default async function getPageProperties(
	id: string,
	block: BlockMap,
	schema: CollectionPropertySchemaMap
) {
	const rawProperties = Object.entries(block?.[id]?.value?.properties || []);

	const properties = rawProperties?.reduce((properties, property) => {
		const [key, value]: [string, any] = property;
		const name = schema[key].name;
		switch (schema[key]?.type) {
			case "file": {
				console.warn("user property not supported");
				break;
			}
			case "date": {
				const dateProperty: FormattedDate | null = getDateValue(value);
				properties[name] = new Date(
					dateProperty?.start_date as string
				).toString();
				break;
			}
			case "select": {
				const select = getTextContent(value);
				properties[name] = select;
				break;
			}
			case "multi_select": {
				const selects = getTextContent(value);
				if (selects[0]?.length) {
					properties[name] = selects.split(",");
				}
				break;
			}
			case "person": {
				console.warn("user property not supported");
				break;
			}
			case "checkbox": {
				const isTrue = getTextContent(value);
				properties[name] = isTrue === "Yes";
				break;
			}
			default: {
				if (schema[key].name === "slug") {
					const values = getTextContent(value);
					if (values[0]?.length) {
						properties[name] = values.split(",");
					}
				} else {
					properties[schema[key].name] = getTextContent(value);
				}
			}
		}
		return properties;
	}, {} as { [key: string]: any });
	return properties;
}
