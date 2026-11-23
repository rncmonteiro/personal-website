# Ricardo Monteiro · Academic website

A multipage academic website built with Jekyll for GitHub Pages.

## Edit the site

- Edit the academic content in `_includes/content/`.
- Edit the homepage profile, affiliations and contact information in `_includes/intro.html`.
- Edit page labels, homepage descriptions and section order in `_data/navigation.yml`.
- Edit the visual styles in `styles.css` and keep photographs and logos in `assets/`.

The pages use root-level HTML filenames so the site works at either a GitHub Pages domain or a project subpath. Keep these filenames when editing the navigation. To add a section, create a Markdown file in `_includes/content/` and add its filename stem and label to the appropriate page in `_data/navigation.yml`.

In the publication files, keep entry numbers in bold and leave a blank line between entries. Existing links can be updated directly in Markdown.

## Preview

Open `index.html` in the separately supplied rendered preview. The preview works from an extracted folder.

If you already have Jekyll 3.10 installed, run `jekyll serve` from this repository and open the local address it prints.

## GitHub Pages

Once you decide to publish, place the repository contents at the configured GitHub Pages source. The site uses Jekyll's built-in Markdown and Liquid support. Keep the underscore-prefixed folders and avoid leaving an older `index.html` alongside `index.md` in the source.
