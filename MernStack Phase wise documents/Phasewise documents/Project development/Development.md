
# Phase 5: Project Development - HouseRent Portal

## 1. Frontend Development Standard
* *Modular Components:* Components are split into folders (admin, common, user/owner, user/renter) for high maintainability.
* *State Management:* Using React useState and useEffect for component-level updates.
* *Reusable UI:* Shared component views like AllPropertiesCards.jsx and Toast.jsx are used to avoid redundant code.

## 2. Code Linting & Formatting
* Using *ESLint* for code quality checks.
* *Tailwind CSS* guidelines used for consistent margin, colors, and layout paddings.

## 3. Git Workflow
The development follows strict feature branching strategies:
1. Create a branch: git checkout -b feature/frontend-components
2. Commit code: git commit -m "feat: added modular toast alerts and owner views"
3. Push & Merge: Push to origin and open a Pull Request (PR) for the main branch.
