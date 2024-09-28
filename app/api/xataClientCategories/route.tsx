
// Handles GET requests to /api/products
import { getXataClient } from '@/lib/xata';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const xata = getXataClient();
  try {
    const categories = await xata.db.Subcategories.getAll();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
