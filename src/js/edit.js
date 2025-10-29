import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";
if (window.udContentLoopBlockSettings?.nonce) {
	apiFetch.use(
		apiFetch.createNonceMiddleware(window.udContentLoopBlockSettings.nonce)
	);
}

import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useEffect, useState, useLayoutEffect } from "@wordpress/element";
import { dispatch, select } from "@wordpress/data";
import {
	createBlocksFromInnerBlocksTemplate,
	getBlockType,
} from "@wordpress/blocks";
import { useSelect } from "@wordpress/data";

import "./utils/gallery_image_size";

// Zuerst Vorlage einmal definieren
const TEMPLATE_AUSBILDUNG_COMMON = [
	["core/gallery"],
	[
		"core/group",
		{
			className: "content",
			lock: { move: true, remove: true },
		},
		[
			[
				"core/group",
				{
					className: "text teaser-text-container",
					lock: { move: true, remove: true },
				},
				[
					[
						"core/heading",
						{
							className: "berufsbezeichnung",
							placeholder: "Berufsbezeichnung",
							lock: { move: true, remove: true },
						},
					],
					[
						"core/paragraph",
						{
							className: "ausbildungsdauer",
							placeholder: "Ausbildungsdauer (z. B. 4 Jahre)",
							lock: { move: true, remove: true },
						},
					],
					[
						"core/paragraph",
						{
							className: "kurzbeschrieb",
							placeholder: "Kurzbeschrieb zur Ausbildung...",
							lock: { move: true, remove: true },
						},
					],
				],
			],
		],
	],
];

// Mapping: contentType → InnerBlocks-Template (je nach Typ)
const TEMPLATE_MAP = {
	childpage: [
		["core/gallery"],
		[
			"core/group",
			{
				className: "content",
				lock: { move: true, remove: true },
			},
			[
				[
					"core/group",
					{
						className: "text teaser-text-container",
						lock: { move: true, remove: true },
					},
					[
						[
							"core/paragraph",
							{
								placeholder: "Einleitungstext...",
								lock: { move: true, remove: true },
							},
						],
					],
				],
			],
		],
	],

	ud_news: [
		["core/gallery"],
		[
			"core/group",
			{
				className: "content",
				lock: { move: true, remove: true },
			},
			[
				[
					"core/post-date",
					{ className: "meta", lock: { move: true, remove: true } },
				],
				[
					"core/group",
					{
						className: "title-wrapper",
						lock: { move: true, remove: true },
					},
					[
						[
							"core/heading",
							{
								className: "main-heading",
								level: 2,
								placeholder: "Titel der Meldung",
								lock: { move: true, remove: true },
							},
						],
					],
				],
				[
					"core/paragraph",
					{
						className: "text main-text",
						placeholder: "Text der Meldung",
						lock: { move: true, remove: true },
					},
				],
				[
					"ud/accordion-block",
					{ className: "accordion" },
					[["ud/link-block", {}]], // ✅ doppelte eckige Klammern!
				],
				["ud/link-block", {}],
			],
		],
	],

	ud_veranstaltungen: [
		["core/gallery"],
		[
			"core/group",
			{
				className: "content",
				lock: { move: true, remove: true },
			},
			[
				[
					"core/group",
					{
						className: "meta meta-row",
						lock: { move: true, remove: true },
					},
					[
						[
							"ud/datetime-block",
							{
								lock: { move: true, remove: true },
							},
						],
						[
							"core/paragraph",
							{
								className: "veranstaltung-ort",
								placeholder: "Ort der Veranstaltung",
								lock: { move: true, remove: true },
							},
						],
					],
				],
				[
					"core/group",
					{
						className: "title-wrapper",
						lock: { move: true, remove: true },
					},
					[
						[
							"core/heading",
							{
								className: "main-heading",
								level: 2,
								placeholder: "Titel der Veranstaltung",
								lock: { move: true, remove: true },
							},
						],
					],
				],
				[
					"ud/accordion-block",
					{ className: "accordion" },
					[["ud/link-block", {}]], // ✅ hier ebenfalls doppelte Klammern
				],
				["ud/link-block", {}],
			],
		],
	],

	ud_bildungsangebote: TEMPLATE_AUSBILDUNG_COMMON,

	datetime: [
		[
			"core/group",
			{
				className: "content",
				lock: { move: true, remove: true },
			},
			[
				[
					"ud/datetime-block",
					{
						className: "meta",
						lock: { move: true, remove: true },
					},
				],
				[
					"core/paragraph",
					{
						className: "text",
						placeholder: "Hier Text eintragen",
						lock: { move: true, remove: true },
					},
				],
				["ud/link-block", { className: "buttons" }],
			],
		],
	],
};

export default function Edit({ attributes, setAttributes, clientId }) {
	const [availablePostTypes, setAvailablePostTypes] = useState([]);
	const { contentType } = attributes;
	const [currentUser, setCurrentUser] = useState(null);
	const [templateInitialized, setTemplateInitialized] = useState(false);

	const [templateReady, setTemplateReady] = useState(false);

	// Hole verfügbare Post-Types aus der REST-API
	useEffect(() => {
		apiFetch({ path: "/wp/v2/types" }).then((types) => {
			const slugs = Object.keys(types);
			setAvailablePostTypes(slugs);
		});
	}, []);

	// Feste Auswahlmöglichkeiten – ergänzt durch dynamisch verfügbare CPTs
	const allOptions = [
		{ value: "ud_news", label: "News" },
		{ value: "ud_veranstaltungen", label: "Veranstaltungen" },
		{ value: "ud_bildungsangebote", label: "Bildungsangebote" },
		{ value: "childpage", label: "Unterseiten" },
	];

	const filteredOptions = allOptions.filter(
		(opt) =>
			opt.value === "childpage" || availablePostTypes.includes(opt.value)
	);

	// Ermittle aktuellen Post-Typ
	const currentPostType = useSelect(
		(select) => select("core/editor").getCurrentPostType(),
		[]
	);

	// Block-Klassen setzen
	const blockProps = useBlockProps({
		className: contentType ? `is-content-type-${contentType}` : null,
	});

	// 1. contentType automatisch setzen, wenn noch nicht definiert
	useEffect(() => {
		if (!contentType && currentPostType) {
			let newType;
			if (currentPostType === "ud_veranstaltungen") {
				newType = "ud_veranstaltungen";
			} else if (currentPostType === "ud_bildungsangebote") {
				newType = "ud_bildungsangebote";
			} else if (currentPostType === "ud_news") {
				newType = "ud_news";
			} else {
				newType = "childpage";
			}
			setAttributes({ contentType: newType });
		}
	}, [contentType, currentPostType, setAttributes]);

	// 2. Initialisiere Block-Template aus TEMPLATE_MAP (nur einmal)
	useLayoutEffect(() => {
		if (!contentType || templateInitialized) return;

		const { getBlock } = select("core/block-editor");
		const { replaceInnerBlocks } = dispatch("core/block-editor");
		const currentBlock = getBlock(clientId);

		if (
			currentBlock &&
			currentBlock.innerBlocks?.length === 0 &&
			TEMPLATE_MAP[contentType]
		) {
			replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate(TEMPLATE_MAP[contentType]),
				true
			);
			setTemplateInitialized(true); // Nur EINMAL initialisieren!
		}
	}, [contentType, clientId, templateInitialized]);

	// User-Daten laden
	useEffect(() => {
		apiFetch({ path: "/wp/v2/users/me" })
			.then((res) => setCurrentUser(res))
			.catch(() => setCurrentUser(null));
	}, []);

	return (
		<>
			<InspectorControls>
				{currentUser?.roles?.includes("administrator") && (
					<PanelBody title="Inhaltstyp wählen" initialOpen>
						<SelectControl
							label="Inhaltstyp wählen"
							value={attributes.contentType || ""}
							options={filteredOptions}
							onChange={(val) => {
								setAttributes({ contentType: val });
								// Template-Initialisierung per Typ-Änderung:
								const { replaceInnerBlocks } =
									dispatch("core/block-editor");
								replaceInnerBlocks(
									clientId,
									createBlocksFromInnerBlocksTemplate(
										TEMPLATE_MAP[val]
									),
									false
								);
								setTemplateInitialized(true);
							}}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
						/>
					</PanelBody>
				)}
			</InspectorControls>
			<div {...blockProps}>
				{/* Fehlerhinweis solange kein Typ */}
				{!contentType ? (
					<p style={{ color: "red" }}>
						Bitte Inhaltstyp im Inspector wählen.
					</p>
				) : (
					<InnerBlocks />
				)}
			</div>
		</>
	);
}
