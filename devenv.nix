{ pkgs, lib, config, inputs, ... }:

{
  packages = 
    [
      pkgs.git
      pkgs.jq
    ];
  
  languages = {
    javascript = {
      enable = true;
      package = pkgs.nodejs_20;
      directory = "./site";
      pnpm = {
        enable = true;
        package = pkgs.pnpm;
        install.enable = true;
      };
    };
    typescript.enable = true;
  };

  enterShell = ''
    git --version
    jq --version
  '';
}
