# Hugo Recipe Theme

## Usage 

In order to use this theme it is recommended that you implement as either a git submodule with:

```bash
git submodule add themes/simple-recipe
```

Or as a hugo module by adding the below to your `config.{toml|yml}`:

```yaml
- module:
    imports:
      - path: github.com/daylinmorgan/simple-recipe
```

## Acknowledgements

Special thanks to Josh Carrier's `Sabrina <https://github.com/joshjcarrier/hugo-sabrina>`_ hugo theme
and Jeff Thompsons's `recipe <https://github.com/jeffThompson/Recipes>`_ website for inspiration when developing this theme.
