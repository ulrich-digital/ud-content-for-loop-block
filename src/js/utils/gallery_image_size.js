import { select, dispatch, subscribe } from '@wordpress/data';

let processedGalleryIds = new Set();

function setGalleryImagesToFull(block) {
	// Neue Gallery: Bilder als innerBlocks
	if (block.innerBlocks && block.innerBlocks.length) {
		block.innerBlocks.forEach((imgBlock) => {
			if (
				imgBlock.name === 'core/image' &&
				imgBlock.attributes.sizeSlug !== 'full'
			) {
				dispatch('core/block-editor').updateBlockAttributes(imgBlock.clientId, {
					sizeSlug: 'full',
				});
			}
		});
	}
	// Alte Gallery: images[]-Array
	if (block.attributes?.images && Array.isArray(block.attributes.images)) {
		const images = block.attributes.images;
		const hasWrongSizes = images.some((img) => img.sizeSlug !== 'full');
		if (hasWrongSizes) {
			const updatedImages = images.map((img) => ({
				...img,
				sizeSlug: 'full',
			}));
			dispatch('core/block-editor').updateBlockAttributes(block.clientId, {
				images: updatedImages,
			});
		}
	}
}

function findGalleryBlocks(blocks) {
	let galleries = [];
	blocks.forEach((block) => {
		if (block.name === 'core/gallery') {
			galleries.push(block);
		}
		if (block.innerBlocks?.length) {
			galleries = galleries.concat(findGalleryBlocks(block.innerBlocks));
		}
	});
	return galleries;
}

subscribe(() => {
	const blocks = select('core/block-editor').getBlocks();
	const galleryBlocks = findGalleryBlocks(blocks);

	galleryBlocks.forEach((block) => {
		if (processedGalleryIds.has(block.clientId)) return;
		setGalleryImagesToFull(block);
		processedGalleryIds.add(block.clientId);
	});
});
