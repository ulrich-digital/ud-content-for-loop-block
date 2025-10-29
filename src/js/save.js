import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { contentType } = attributes;
	const blockProps = useBlockProps.save({
		className: contentType ? `is-content-type-${contentType}` : undefined,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
