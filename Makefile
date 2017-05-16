all:
	@babel extension.js --out-file extension.compiled.js --source-maps true
	@echo built

watch:
	watch-run -i -p "extension.compiled.js" -- make all

clean:
	rm -rf out/