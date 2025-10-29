.PHONY: help install dev build clean lint test serve release all quick watch build-dev lint-fix analyze verify size info release-patch release-minor release-major

# Colors for terminal output
RED=\033[0;31m
GREEN=\033[0;32m
YELLOW=\033[1;33m
BLUE=\033[0;34m
CYAN=\033[0;36m
MAGENTA=\033[0;35m
ORANGE=\033[38;5;214m
PURPLE=\033[0;95m
TEAL=\033[0;96m
NC=\033[0m # No Color

# Icons
ROCKET=🚀
GEAR=⚙️
CHECK=✅
WARNING=⚠️
FOLDER=📁
FILE=📄
SIZE=📏
CLEAN=🧹
TEST=🧪
SEARCH=🔍
FIX=🔧
GLOBE=🌐
CHART=📊
INFO=ℹ️
TAG=🏷️
DOWNLOAD=📦
FIRE=🔥

help: ## Show this help message
	@echo ""
	@echo "  $(TEAL)          ██╗   ██╗██╗██╗  ██╗███████╗         $(NC)"
	@echo "  $(TEAL)          ██║   ██║██║██║ ██╔╝██╔════╝         $(NC)"
	@echo "  $(TEAL)          ██║   ██║██║█████╔╝ ███████╗         $(NC)"
	@echo "  $(TEAL)          ╚██╗ ██╔╝██║██╔═██╗ ╚════██║         $(NC)"
	@echo "  $(TEAL)           ╚████╔╝ ██║██║  ██╗███████║         $(NC)"
	@echo "  $(TEAL)            ╚═══╝  ╚═╝╚═╝  ╚═╝╚══════╝         $(NC)"
	@echo "  $(PURPLE)           A N I M A T I O N   B U I L D           $(NC)"
	@echo ""
	@echo "  $(YELLOW)${ROCKET}  Available Commands:$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "    $(GREEN)%-20s$(NC) $(CYAN)%s$(NC)\n", $$1, $$2}'
	@echo ""
	@echo "  $(YELLOW)${INFO}  Quick Start:$(NC)"
	@echo "    $(GREEN)make install$(NC)     ${DOWNLOAD}  First-time setup"
	@echo "    $(GREEN)make dev$(NC)         ${FIRE}    Start development"
	@echo "    $(GREEN)make build$(NC)       ${GEAR}    Build for production"
	@echo ""

install: ## Install project dependencies
	@echo ""
	@echo "  $(TEAL)${DOWNLOAD}   INSTALLING DEPENDENCIES   ${DOWNLOAD}$(NC)"
	@echo ""
	npm ci --legacy-peer-deps
	@echo ""
	@echo "  $(GREEN)${CHECK} Dependencies installed successfully!$(NC)"
	@echo ""

dev: ## Start development mode with live reload
	@echo ""
	@echo "  $(PURPLE)${FIRE}    STARTING DEVELOPMENT MODE    ${FIRE}$(NC)"
	@echo ""
	npm run dev

build: ## Build production version (minified)
	@echo ""
	@echo "  $(TEAL)${GEAR}    BUILDING PRODUCTION    ${GEAR}$(NC)"
	@echo ""
	npm run build
	@echo ""
	@echo "  $(GREEN)${CHECK} Production build completed!$(NC)"
	@echo "  $(YELLOW)${FOLDER} Build output:$(NC)"
	@ls -lh dist/js/ dist/css/ 2>/dev/null || echo "    $(RED)No dist directory found$(NC)"
	@echo ""

build-dev: ## Build development version (unminified)
	@echo ""
	@echo "  $(CYAN)${GEAR}   BUILDING DEVELOPMENT   ${GEAR}$(NC)"
	@echo ""
	npm run build:dev
	@echo ""
	@echo "  $(GREEN)${CHECK} Development build completed!$(NC)"
	@echo ""

clean: ## Clean build artifacts and cache
	@echo ""
	@echo "  $(ORANGE)${CLEAN}      CLEANING PROJECT      ${CLEAN}$(NC)"
	@echo ""
	npm run clean
	@rm -rf release/ 2>/dev/null || true
	@echo ""
	@echo "  $(GREEN)${CHECK} Project cleaned successfully!$(NC)"
	@echo ""

lint: ## Run code quality checks
	@echo ""
	@echo "  $(YELLOW)${SEARCH}      CODE QUALITY CHECK     ${SEARCH}$(NC)"
	@echo ""
	@echo "  $(YELLOW)${SEARCH} Linting JavaScript...$(NC)"
	@npm run lint:js 2>/dev/null || (echo "  $(YELLOW)${WARNING} JavaScript linting completed with warnings$(NC)" && true)
	@echo ""
	@echo "  $(YELLOW)${SEARCH} Linting SCSS...$(NC)"
	@npm run lint:scss 2>/dev/null || (echo "  $(YELLOW)${WARNING} SCSS linting completed with warnings$(NC)" && true)
	@echo ""
	@echo "  $(GREEN)${CHECK} Code quality check completed!$(NC)"
	@echo ""

lint-fix: ## Automatically fix linting issues
	@echo ""
	@echo "  $(ORANGE)${FIX}    FIXING CODE ISSUES     ${FIX}$(NC)"
	@echo ""
	@npm run lint:js -- --fix 2>/dev/null || true
	@npm run lint:scss -- --fix 2>/dev/null || true
	@echo ""
	@echo "  $(GREEN)${CHECK} Code issues fixed automatically!$(NC)"
	@echo ""

test: ## Run test suite
	@echo ""
	@echo "  $(MAGENTA)${TEST}      RUNNING TEST SUITE     ${TEST}$(NC)"
	@echo ""
	npm test
	@echo ""
	@echo "  $(GREEN)${CHECK} Test suite completed!$(NC)"
	@echo ""

serve: ## Start development server
	@echo ""
	@echo "  $(BLUE)${GLOBE}    STARTING DEV SERVER    ${GLOBE}$(NC)"
	@echo ""
	npm run serve

analyze: ## Analyze bundle size and dependencies
	@echo ""
	@echo "  $(TEAL)${CHART}    BUNDLE ANALYSIS      ${CHART}$(NC)"
	@echo ""
	ANALYZE=true npm run build
	@echo ""
	@echo "  $(GREEN)${CHECK} Bundle analysis completed!$(NC)"
	@echo ""

verify: ## Verify all build files are generated correctly
	@echo ""
	@echo "  $(GREEN)${CHECK}    VERIFYING BUILD       ${CHECK}$(NC)"
	@echo ""
	@files="dist/js/viks.js dist/js/viks.min.js dist/css/viks.css dist/css/viks.min.css dist/js/viks.js.map dist/js/viks.min.js.map dist/css/viks.css.map dist/css/viks.min.css.map"; \
	all_good=true; \
	for file in $$files; do \
		if [ -f "$$file" ]; then \
			echo "  $(GREEN)${CHECK} $$(basename $$file) exists$(NC)"; \
		else \
			echo "  $(RED)✗ $$(basename $$file) missing$(NC)"; \
			all_good=false; \
		fi; \
	done; \
	echo ""; \
	if $$all_good; then \
		echo "  $(GREEN)${CHECK} All build files verified successfully!$(NC)"; \
	else \
		echo "  $(RED)${WARNING} Some build files are missing!$(NC)"; \
		exit 1; \
	fi
	@echo ""

size: ## Display file sizes and build statistics
	@echo ""
	@echo "  $(CYAN)${SIZE}     BUILD STATISTICS     ${SIZE}$(NC)"
	@echo ""
	@if [ -d "dist" ]; then \
		echo "  $(YELLOW)${FILE} JavaScript Files:$(NC)"; \
		[ -f "dist/js/viks.js" ] && echo "    $$(du -h dist/js/viks.js | cut -f1) - viks.js" || echo "    $(RED)viks.js: not found$(NC)"; \
		[ -f "dist/js/viks.min.js" ] && echo "    $$(du -h dist/js/viks.min.js | cut -f1) - viks.min.js" || echo "    $(RED)viks.min.js: not found$(NC)"; \
		echo ""; \
		echo "  $(YELLOW)${FILE} CSS Files:$(NC)"; \
		[ -f "dist/css/viks.css" ] && echo "    $$(du -h dist/css/viks.css | cut -f1) - viks.css" || echo "    $(RED)viks.css: not found$(NC)"; \
		[ -f "dist/css/viks.min.css" ] && echo "    $$(du -h dist/css/viks.min.css | cut -f1) - viks.min.css" || echo "    $(RED)viks.min.css: not found$(NC)"; \
		echo ""; \
		echo "  $(YELLOW)${FOLDER} Source Maps:$(NC)"; \
		ls -la dist/js/*.map dist/css/*.map 2>/dev/null | awk '{print "    " $$5 " bytes - " $$9}' || echo "    $(YELLOW)No source maps found$(NC)"; \
	else \
		echo "  $(RED)${WARNING} dist directory not found!$(NC)"; \
		echo "  $(YELLOW)Run 'make build' first$(NC)"; \
	fi
	@echo ""

info: ## Display project information and environment
	@echo ""
	@echo "  $(BLUE)${INFO}    PROJECT INFORMATION    ${INFO}$(NC)"
	@echo ""
	@echo "  $(YELLOW)${FILE} Project:$(NC)    $$(node -p "require('./package.json').name")"
	@echo "  $(YELLOW)${TAG} Version:$(NC)     $$(node -p "require('./package.json').version")"
	@echo "  $(YELLOW)${INFO} Description:$(NC) $$(node -p "require('./package.json').description")"
	@echo ""
	@echo "  $(YELLOW)${GEAR} Environment:$(NC)"
	@echo "    Node:  $$(node --version)"
	@echo "    NPM:   $$(npm --version)"
	@echo "    OS:    $$(uname -sm 2>/dev/null || echo "Unknown")"
	@echo ""

release: ## Create a new release (make release VERSION=1.0.0)
	@echo ""
	@echo "  $(PURPLE)${TAG}      CREATING RELEASE      ${TAG}$(NC)"
	@echo ""
	@if [ -z "$(VERSION)" ]; then \
		echo "  $(RED)${WARNING} ERROR: VERSION parameter required!$(NC)"; \
		echo ""; \
		echo "  $(YELLOW)Usage:$(NC)"; \
		echo "    $(GREEN)make release VERSION=1.0.0$(NC)"; \
		echo ""; \
		echo "  $(YELLOW)Or use auto-versioning:$(NC)"; \
		echo "    $(GREEN)make release-patch$(NC)    # v1.0.0 → v1.0.1"; \
		echo "    $(GREEN)make release-minor$(NC)    # v1.0.0 → v1.1.0"; \
		echo "    $(GREEN)make release-major$(NC)    # v1.0.0 → v2.0.0"; \
		echo ""; \
		exit 1; \
	fi
	@echo "  $(YELLOW)Current version:$(NC) $$(node -p "require('./package.json').version")"
	@echo "  $(YELLOW)New version:$(NC)     v$(VERSION)"
	@echo ""
	@if npm version $(VERSION) --no-git-tag-version; then \
		if git rev-parse --git-dir > /dev/null 2>&1; then \
			git add package.json package-lock.json; \
			git commit -m "release: v$(VERSION)"; \
			git tag -a "v$(VERSION)" -m "Release v$(VERSION)"; \
			git push origin main --tags; \
			echo ""; \
			echo "  $(GREEN)${CHECK} Release v$(VERSION) created and pushed to git!$(NC)"; \
		else \
			echo ""; \
			echo "  $(YELLOW)${WARNING} Git repository not found. Package version updated to v$(VERSION)$(NC)"; \
			echo "  $(YELLOW)Initialize git repository to complete the release process$(NC)"; \
		fi; \
	else \
		echo ""; \
		echo "  $(RED)${WARNING} Failed to create release v$(VERSION)$(NC)"; \
		exit 1; \
	fi
	@echo ""

release-patch: ## Create patch release (auto-increment patch version)
	@$(eval CURRENT_VERSION := $(shell node -p "require('./package.json').version"))
	@$(eval NEW_VERSION := $(shell echo "$(CURRENT_VERSION)" | awk -F. '{$$3 = $$3 + 1; OFS="."; print $$1, $$2, $$3}'))
	@$(MAKE) release VERSION=$(NEW_VERSION)

release-minor: ## Create minor release (auto-increment minor version)
	@$(eval CURRENT_VERSION := $(shell node -p "require('./package.json').version"))
	@$(eval NEW_VERSION := $(shell echo "$(CURRENT_VERSION)" | awk -F. '{$$2 = $$2 + 1; $$3 = 0; OFS="."; print $$1, $$2, $$3}'))
	@$(MAKE) release VERSION=$(NEW_VERSION)

release-major: ## Create major release (auto-increment major version)
	@$(eval CURRENT_VERSION := $(shell node -p "require('./package.json').version"))
	@$(eval NEW_VERSION := $(shell echo "$(CURRENT_VERSION)" | awk -F. '{$$1 = $$1 + 1; $$2 = 0; $$3 = 0; OFS="."; print $$1, $$2, $$3}'))
	@$(MAKE) release VERSION=$(NEW_VERSION)

all: clean install lint build verify ## Run complete build pipeline
	@echo ""
	@echo "  $(GREEN)${CHECK} Complete build pipeline finished!$(NC)"
	@echo "  $(YELLOW)${ROCKET} Your project is ready for production!$(NC)"
	@echo ""

quick: clean build verify ## Quick build without full install
	@echo ""
	@echo "  $(GREEN)${CHECK} Quick build completed!$(NC)"
	@echo ""

watch: ## Watch for file changes (development)
	@$(MAKE) dev

.DEFAULT_GOAL := help