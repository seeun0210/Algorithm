const wallpaper = [".#...", "..#..", "...#."];
const x = wallpaper.length;
const y = wallpaper[0].length;
const wallpaperArr = ([x - 1][y - 1] = ".");
for (let i = 0; i < x.length; i++) {
  wallpaperArr[i] = [...wallpaper[i]];
}
console.log(wallpaperArr);
