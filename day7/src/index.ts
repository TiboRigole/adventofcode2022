import { readInput } from "./InputReader";
import { Command } from "./types/Command";
import { FileSystem } from "./types/FileSystem";

const fileSystem = new FileSystem();

const commands: Command[] = readInput('./input/dummyInput.txt')