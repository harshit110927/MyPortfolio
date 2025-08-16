#!/usr/bin/env node

// Simple build script for Vercel deployment
import { execSync } from 'child_process';
import { mkdirSync, cpSync, existsSync } from 'fs';
import path from 'path';

console.log('Building frontend for Vercel deployment...');

try {
  // Run vite build
  execSync('vite build', { stdio: 'inherit' });
  
  // Ensure dist/public directory exists and copy files if needed
  const buildDir = 'dist/public';
  if (existsSync(buildDir)) {
    console.log(`✅ Build completed successfully! Files are in ${buildDir}`);
  } else {
    console.log('❌ Build directory not found');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}