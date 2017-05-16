all:
	@babel extension.js --out-file extension.compiled.js --source-maps true
	@echo this trash is built

watch:
	@echo start watching your sin
	@babel extension.js --watch --out-file extension.compiled.js --source-maps true

clean:
	rm -rf out/