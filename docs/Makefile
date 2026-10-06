SHELL := /bin/bash

# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= .venv/bin/sphinx-build
SOURCEDIR     = source
BUILDDIR      = build
VENV          = .venv
PYTHON        = python3

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile install clean-venv

# Create virtual environment
$(VENV)/bin/activate:
	$(PYTHON) -m venv $(VENV)

# Install dependencies
install: $(VENV)/bin/activate
	$(VENV)/bin/pip install -r requirements.txt

# Clean virtual environment
clean-venv:
	rm -rf $(VENV)

# Serve with live reload
serve:
	$(VENV)/bin/sphinx-watch source build html --httpd

# Override html target to ensure dependencies are installed
html:
	@$(SPHINXBUILD) -M html "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
