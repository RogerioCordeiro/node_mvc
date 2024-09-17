# Git Commands

## Criar uma nova branch

```sh
git checkout -b nome-da-branch
```

## Commit inicial de uma aplicação nova

```sh
git commit -m "feat: initial commit"
```

## Commit para alterações no README

```sh
git commit -m "docs: update README"
```

## Commit para adicionar configuração de banco de dados

```sh
git commit -m "feat: add database configuration"
```

## Merge da branch `feature/database-setup` para `develop`

```sh
git commit -m "merge: integrate database setup into develop"
```

## Merge da branch `develop` para `main`

```sh
git commit -m "merge: integrate develop into main"
```

## Criar uma branch para o model

```sh
git checkout -b feat/model
```

## Commit para implementar o model

```sh
git commit -m "feat: implement model"
```

## Criar uma branch para rotas

```sh
git checkout -b feat/routes
```

## Commit para adicionar HTML e CSS

```sh
git commit -m "feat: add initial HTML and CSS for project layout"
```

## Adicionar alterações e fazer commit e push em uma linha (Prompt de Comando/Git Bash)

```sh
git add . && git commit -m "mensagem do commit" && git push origin nome-da-branch
```

## Adicionar alterações e fazer commit e push em uma linha (PowerShell)

```powershell
git add .; git commit -m "mensagem do commit"; git push origin nome-da-branch
```

## Adicionar alterações no índice

```sh
git add arquivo
```

## Fazer o push para o repositório remoto

```sh
git push origin nome-da-branch
```
