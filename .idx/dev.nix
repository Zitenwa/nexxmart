
{ pkgs, ... }: {
  # Use the latest stable channel
  channel = "stable-24.05";

  # Nix packages to install
  # You can search for packages on https://search.nixos.org/packages
  packages = [
    pkgs.nodejs_20  # For Next.js development
  ];

  # Environment variables for your workspace
  env = {};

  # VS Code extensions to install
  # You can find extensions on https://open-vsx.org/
  idx = {
    extensions = [
      "dbaeumer.vscode-eslint"    # For linting
      "bradlc.vscode-tailwindcss" # For Tailwind CSS IntelliSense
    ];

    # Workspace lifecycle hooks
    workspace = {
      # Runs when the workspace is first created
      onCreate = {
        # Create a new Next.js app named "nexxmart" with TypeScript and Tailwind CSS
        init = "npx create-next-app@latest nexxmart --typescript --tailwind --eslint --app --src-dir --import-alias '@/*' --use-npm --no-yes";
        # Install npm dependencies
        npm-install = "cd nexxmart && npm install";
      };
      # Runs every time the workspace is (re)started
      onStart = {
        # Start the Next.js development server
        dev-server = "cd nexxmart && npm run dev";
      };
    };

    # Web previews
    previews = {
      enable = true;
      previews = {
        # Preview for the Next.js app
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
          cwd = "nexxmart"; # Run the command in the "nexxmart" directory
        };
      };
    };
  };
}
